import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../Cover/Cover";


const MenuCategory = ({ items, image, title }) => {

    return (
        <>
            {title &&
                <Cover image={image} title={title} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} ></Cover>
            }

            <div className="container mx-auto px-16 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        items?.map(item => <MenuItem
                            item={item}
                            key={item._id}
                        ></MenuItem>)
                    }
                </div>

                {
                    title &&
                    <div className="text-center">
                        <Link to={`/order/${title}`} className="btn btn-outline text-xl font-semibold border-0 border-b-4 mt-14">ORDER YOUR FAVOURITE FOOD</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default MenuCategory;