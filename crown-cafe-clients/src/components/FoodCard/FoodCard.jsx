import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosSecure } from "../../Hook/AxiosSecure";
import UseAuth from "../../Hook/UseAuth";
import UseCarts from "../../Hook/UseCarts";


const FoodCard = ({ item }) => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCarts();
    const { _id, image, name, recipe, price } = item;

    const handleAddToCard = food => {
        if (user && user?.email) {
            console.log(food, user?.email);
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name: name,
                image: image,
                price: price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success('Food Added On Cart');
                        refetch();
                    }
                })
        }
        else {
            alert('Please Login, After add food on cart')
            navigate('/login', { state: { from: location } })
        }
    }

    return (
        <div className="border  bg-gray-100">
            <div className="relative">
                <p className="absolute right-6 top-3 px-4 py-2 bg-black text-white font-Ineter text-base font-semibold">${price}</p>
                <img src={image} alt="" className='w-full h-80 object-cover pb-8' />
            </div>
            <h2 className="text-2xl font-Ineter pb-2 font-semibold ">{name}</h2>
            <p className="text-base font-Ineter pb-6 ">{recipe}</p>
            <button
                onClick={() => handleAddToCard(item)}
                className='btn text-xl font-semibold text-yellow-600 border-yellow-600 border-0 border-b-4  mb-8'>Add To Card</button>
        </div>
    );
};

export default FoodCard;