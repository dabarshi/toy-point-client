import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className="my-10">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Shop By Category</h1>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Marbel</Tab>
                        <Tab>DC</Tab>
                        <Tab>One Piece</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;