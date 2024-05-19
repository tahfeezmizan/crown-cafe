import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useMenu from '../../../Hook/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <div>
            <section className='container mx-auto px-16 py-20'>
                <SectionTitle
                    subHeading="Check it out"
                    Heading="FROM OUR MENU"
                ></SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {
                        popular?.map(item => <MenuItem
                            item={item}
                            key={item._id}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;