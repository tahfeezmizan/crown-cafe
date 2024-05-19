import FoodCard from "../../../components/FoodCard/FoodCard";

const TabCard = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center mt-10">
            {
                item?.map(item => <FoodCard
                    item={item}
                    key={item._id}
                ></FoodCard>)
            }
        </div>
    );
};

export default TabCard;