import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../Cover/Cover";


const MenuCategory = ({ items, image, title, description }) => {
    
    return (

        <>
            {title &&
                <Cover image={image} title={title} description={description} ></Cover>
            }

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {
                    items?.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>

            <div className="text-center">
                <Link to={`/order/${title}`} className="btn btn-outline text-xl font-semibold border-0 border-b-4 mt-14">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </>
    );
};

export default MenuCategory;