import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import HomeBanner from "../HomeBanner/HomeBanner";
import NewArrival from "../NewArrival/NewArrival";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <NewArrival></NewArrival>
            More Home comming
        </div>
    );
};

export default Home;