import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

const ShopByCategory = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);
    const [subCategory, setSubCategory] = useState('Marvel');

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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <ToyCard
                                    key={toy._id}
                                    toy={toy}
                                ></ToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <ToyCard
                                    key={toy._id}
                                    toy={toy}
                                ></ToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys.map(toy => <ToyCard
                                    key={toy._id}
                                    toy={toy}
                                ></ToyCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;