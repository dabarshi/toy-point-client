import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import HomeBanner from "../HomeBanner/HomeBanner";
import NewArrival from "../NewArrival/NewArrival";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            {/* home Banner section */}
            <HomeBanner></HomeBanner>
            {/* Gallery Section */}
            <Gallery></Gallery>

            {/* shop By category Sction */}
            <ShopByCategory></ShopByCategory>
            {/* newest Arrival section */}
            <NewArrival></NewArrival>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-12">
                <div className="my-6">
                    <h1 className="font-bold text-3xl my-3">Why We Are Best</h1>
                    <h1 className="font-bold text-3xl">In The Market</h1>
                </div>
                <div className="p-4 text-center">
                    <p>
                        The Toy Point is more than just a marketplace. We foster a thriving community of like-minded individuals who share their expertise, insights, and enthusiasm for action figures. Connect with fellow collectors, engage in discussions, and stay up-to-date with the latest news, releases, and events in the action figure world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;