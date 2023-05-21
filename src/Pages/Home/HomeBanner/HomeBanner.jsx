import img2 from '../../../assets/toyGallary/wonderWoman/1.jpg';
import img3 from '../../../assets/Banner/3.jpg';
import img4 from '../../../assets/Banner/4.jpg';
import img5 from '../../../assets/Banner/5.jpg';

const HomeBanner = () => {
    return (
        <div className="carousel md:h-[600px] w-full my-10 rounded-2xl">
        {/* First image Slide */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-full" />
                {/* First img text and button */}
                <div className="absolute flex justify-center items-end h-full w-full bg-gradient-to-t from-[#000000] to-[rgba(103,103,103,0)]">
                    <div className='text-center space-y-6 mb-2 md:mb-5'>
                    <div className='md:space-y-4'>
                            <h1 className='text-white text-2xl md:text-5xl font-bold'>Toy Point</h1>
                            <p className='text-white text-xs md:text-base'>Bring Your Heroes TO Home</p>
                        </div>
                        <div className='flex gap-3 justify-center'>
                            <a href="#slide4" className="btn btn-xs md:btn">❮</a>
                            <a href="#slide2" className="btn btn-xs md:btn">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second image slide */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                {/* second img text and button */}
                <div className="absolute flex justify-center items-end h-full w-full bg-gradient-to-t from-[#000000] to-[rgba(103,103,103,0)]">
                    <div className='text-center space-y-6 mb-2 md:mb-5'>
                    <div className='md:space-y-4'>
                            <h1 className='text-white text-2xl md:text-5xl font-bold'>Toy Point</h1>
                            <p className='text-white text-xs md:text-base'>Bring Your Heroes TO Home</p>
                        </div>
                        <div className='flex gap-3 justify-center'>
                            <a href="#slide1" className="btn btn-xs md:btn">❮</a>
                            <a href="#slide3" className="btn btn-xs md:btn">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* third img slide */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                {/* third img text and button */}
                <div className="absolute flex justify-center items-end h-full w-full bg-gradient-to-t from-[#000000] to-[rgba(103,103,103,0)]">
                    <div className='text-center space-y-6 mb-2 md:mb-5'>
                        <div className='md:space-y-4'>
                            <h1 className='text-white text-2xl md:text-5xl font-bold'>Toy Point</h1>
                            <p className='text-white text-xs md:text-base'>Bring Your Heroes TO Home</p>
                        </div>
                        <div className='flex gap-3 justify-center'>
                            <a href="#slide2" className="btn btn-xs md:btn">❮</a>
                            <a href="#slide4" className="btn btn-xs md:btn">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th slide */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                {/* text and button */}
                <div className="absolute flex justify-center items-end h-full w-full bg-gradient-to-t from-[#000000] to-[rgba(103,103,103,0)]">
                    <div className='text-center space-y-6 mb-2 md:mb-5'>
                        <div className='md:space-y-4'>
                            <h1 className='text-white text-2xl md:text-5xl font-bold'>Toy Point</h1>
                            <p className='text-white text-xs md:text-base'>Bring Your Heroes TO Home</p>
                        </div>
                        <div className='flex gap-3 justify-center'>
                            <a href="#slide3" className="btn btn-xs md:btn">❮</a>
                            <a href="#slide1" className="btn btn-xs md:btn">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;