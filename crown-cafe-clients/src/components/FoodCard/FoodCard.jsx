

const FoodCard = ({ item }) => {

    const { image, name, recipe, price } = item;

    return (
        <div className="border  bg-gray-100">
            <div className="relative">
                <p className="absolute right-6 top-3 px-4 py-2 bg-black text-white font-Ineter text-base font-semibold">${price}</p>
                <img src={image} alt="" className='w-full h-80 object-cover pb-8' />
            </div>
            <h2 className="text-2xl font-Ineter pb-2 font-semibold ">{name}</h2>
            <p className="text-base font-Ineter pb-6 ">{recipe}</p>
            <button className='btn text-xl font-semibold text-yellow-600 border-yellow-600 border-0 border-b-4  mb-8'>Add To Card</button>
        </div>
    );
};

export default FoodCard;