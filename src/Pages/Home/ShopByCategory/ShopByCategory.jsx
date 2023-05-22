import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

    const [tabIndex, setTabIndex] = useState(0);
    // const [dc, setDc] = useState([]);
    // const [onePiece, setOnePiece] = useState([]);
    // const [Marvel, setMarvel] = useState([]);

    const [toys, setToys] = useState([]);
    const [subCategory, setSubCategory] = useState('');

    const handleClick = (name) => {
            setSubCategory(name);
    }

    const url = `http://localhost:5000/toys?subCategory=${subCategory}`;
    console.log(tabIndex);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
        // fetch(`http://localhost:5000/toys?subCategory=DC`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setDc(data)
        //     })
        // fetch(`http://localhost:5000/toys?subCategory=One Piece`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setOnePiece(data)
        //     })
        // fetch(`http://localhost:5000/toys?subCategory=Marvel`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMarvel(data)
        //     })
    }, [url])

    return (
        <div className="my-10">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Shop By Category</h1>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab onClick={() => handleClick('Marvel')}>Marvel</Tab>
                        <Tab onClick={() => handleClick('One Piece')}>One Piece</Tab>
                        <Tab onClick={() => handleClick('DC')}>DC</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            toys.map(toy => <p key={toy._id}>{toy.toyName}</p>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys.map(toy => <p key={toy._id}>{toy.toyName}</p>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys.map(toy => <p key={toy._id}>{toy.toyName}</p>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;