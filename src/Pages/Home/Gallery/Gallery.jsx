import superman1 from '../../../assets/toyGallary/superman/1.webp';
import superman2 from '../../../assets/toyGallary/superman/2.jpg';
import superman3 from '../../../assets/toyGallary/superman/3.webp';
import batman1 from '../../../assets/toyGallary/batman/1.jpg';
import wonderWoman1 from '../../../assets/toyGallary/wonderWoman/1.jpg';
import wonderWoman2 from '../../../assets/toyGallary/wonderWoman/2.jpg';
import luffy1 from '../../../assets/toyGallary/luffy/1.jpeg';
import luffy2 from '../../../assets/toyGallary/luffy/2.webp';
import luffy3 from '../../../assets/toyGallary/luffy/3.webp';
import luffy4 from '../../../assets/toyGallary/luffy/4.jpg';
import luffy5 from '../../../assets/toyGallary/luffy/5.avif';
import luffy6 from '../../../assets/toyGallary/luffy/6.webp';
import luffy7 from '../../../assets/toyGallary/luffy/6_.jpg';
import luffy8 from '../../../assets/toyGallary/luffy/7.webp';
import luffy9 from '../../../assets/toyGallary/luffy/8.jpg';

const Gallery = () => {
    return (
        <div className='bg-slate-400 p-5 rounded-2xl'>
                <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Action Figures Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-5'>
                <img src={luffy1} className='rounded-2xl p-3' />
                <img src={superman1} className='rounded-2xl p-3' />
                <img src={luffy2} className='rounded-2xl p-3' />
                <img src={batman1} className='rounded-2xl p-3' />
                <img src={wonderWoman1} className='rounded-2xl p-3' />
                <img src={superman2} className='rounded-2xl p-3' />
                <img src={luffy3} className='rounded-2xl p-3' />
                <img src={superman3} className='rounded-2xl p-3' />
                <img src={luffy4} className='rounded-2xl p-3' />
                <img src={wonderWoman2} className='rounded-2xl p-3' />
                <img src={luffy5} className='rounded-2xl p-3' />
                <img src={luffy6} className='rounded-2xl p-3' />
                <img src={luffy7} className='rounded-2xl p-3' />
                <img src={luffy8} className='rounded-2xl p-3' />
                <img src={luffy9} className='rounded-2xl p-3' />
            </div>
        </div>
    );
};

export default Gallery;