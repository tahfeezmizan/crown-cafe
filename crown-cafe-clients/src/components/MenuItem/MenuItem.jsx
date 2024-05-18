import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className='flex items-start gap-8'>
            <img src={image} className='custom-border-radius w-28 h-24' alt="" />
            <div className="">
                <h2 className="text-xl font-Cinezl divider divider-start ">{name}</h2>
                <p className="text-base text-gray-500">{recipe}</p>
            </div>
            <div className="">
                <p className="text-yellow-600 font-Ineter text-xl">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;