import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import Marquee from "react-fast-marquee";


const NewArrival = () => {
    const [newToy, setNewToy] = useState([]);

    useEffect(() => {
        fetch('https://y-six-olive.vercel.app/new-toys')
            .then(res => res.json())
            .then(data => setNewToy(data))
    }, [])
    return (
        <div className="my-12 rounded-2xl border">
            <div className="text-center my-6">
                <h1 className='font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-4'>Just Arrived !</h1>
                <p className="font-bold">Check out our new action figures</p>
            </div>
            <Marquee>
                <div className="grid grid-cols-3 gap-4">
                    {
                        newToy.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default NewArrival;