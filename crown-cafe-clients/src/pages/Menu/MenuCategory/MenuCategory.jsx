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

            
        </>
    );
};

export default MenuCategory;