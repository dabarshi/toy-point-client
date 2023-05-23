
import superman2 from '../../../assets/toyGallary/superman/2.jpg';
import superman3 from '../../../assets/toyGallary/superman/3.webp';
import batman1 from '../../../assets/toyGallary/batman/1.jpg';
import wonderWoman2 from '../../../assets/toyGallary/wonderWoman/2.jpg';
import luffy1 from '../../../assets/toyGallary/luffy/1.jpeg';
import luffy2 from '../../../assets/toyGallary/luffy/2.webp';
import luffy3 from '../../../assets/toyGallary/luffy/3.webp';
import luffy4 from '../../../assets/toyGallary/luffy/4.jpg';
import luffy5 from '../../../assets/toyGallary/luffy/5.avif';
import luffy6 from '../../../assets/toyGallary/luffy/6.webp';
import luffy8 from '../../../assets/toyGallary/luffy/7.webp';
import luffy9 from '../../../assets/toyGallary/luffy/8.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Gallery = () => {

    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div className='bg-slate-400 p-5 rounded-2xl' >
                <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Action Figures Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                <img src={luffy1} data-aos="fade-up" className='rounded-2xl w-full h-auto'/>
                <img src={luffy2} data-aos="fade-down" className='rounded-2xl w-full h-auto' />
                <img src={luffy5} data-aos="fade-left" className='rounded-2xl w-full h-auto' />
                <img src={batman1} data-aos="fade-right" className='rounded-2xl w-full h-auto' />
                <img src={superman2} data-aos="fade-up" className='rounded-2xl w-full h-auto' />
                <img src={luffy3} data-aos="fade-down-left" className='rounded-2xl w-full h-auto' />
                <img src={superman3} data-aos="fade-up-right" className='rounded-2xl w-full h-auto' />
                <img src={luffy4} data-aos="fade-up" className='rounded-2xl w-full h-auto' />
                <img src={wonderWoman2} data-aos="fade-up-left" className='rounded-2xl w-full h-auto' />
                <img src={luffy6} data-aos="fade-left" className='rounded-2xl w-full h-auto' />
                <img src={luffy8} data-aos="fade-down" className='rounded-2xl w-full h-auto' />
                <img src={luffy9} data-aos="fade-right" className='rounded-2xl w-full h-auto' />
            </div>
        </div>
    );
};

export default Gallery;