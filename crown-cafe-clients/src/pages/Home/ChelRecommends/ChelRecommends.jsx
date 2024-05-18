import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import cardImg from "../../../assets/home/slide5.jpg"

const ChelRecommends = () => {
    return (
        <section className='container mx-auto py-20'>
            <SectionTitle
                subHeading="Should Try"
                Heading="CHEF RECOMMENDS"
            ></SectionTitle>

            <div className="flex items-center justify-between text-center gap-7">
                <div className="border  bg-gray-100">
                    <img src={cardImg} alt="" className='w-full h-80 object-cover pb-8' />
                    <h2 className="text-2xl font-Ineter pb-2 font-semibold ">Caeser Salad</h2>
                    <p className="text-base font-Ineter pb-6 ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='btn uppercase mb-8'>Add To Card</button>
                </div>
                <div className="border  bg-gray-100">
                    <img src={cardImg} alt="" className='w-full h-80 object-cover pb-8' />
                    <h2 className="text-2xl font-Ineter pb-2 font-semibold ">Caeser Salad</h2>
                    <p className="text-base font-Ineter pb-6 ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='btn uppercase mb-8'>Add To Card</button>
                </div>
                <div className="border  bg-gray-100">
                    <img src={cardImg} alt="" className='w-full h-80 object-cover pb-8' />
                    <h2 className="text-2xl font-Ineter pb-2 font-semibold ">Caeser Salad</h2>
                    <p className="text-base font-Ineter pb-6 ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='btn uppercase mb-8'>Add To Card</button>
                </div>
                <div className="border  bg-gray-100">
                    <img src={cardImg} alt="" className='w-full h-80 object-cover pb-8' />
                    <h2 className="text-2xl font-Ineter pb-2 font-semibold ">Caeser Salad</h2>
                    <p className="text-base font-Ineter pb-6 ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='btn uppercase mb-8'>Add To Card</button>
                </div>
            </div>
        </section>
    );
};

export default ChelRecommends;