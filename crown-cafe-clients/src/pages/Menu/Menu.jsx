import Cover from "./Cover/Cover";
import useMenu from "../../Hook/useMenu";
import { Helmet } from "react-helmet-async";
import bgImg from "../../assets/menu/banner3.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Our Menu - Crown Cafe Restaurant</title>
            </Helmet>
            <Cover image={bgImg} title="OUR MENU"></Cover>

            <section>
                <div className="container mx-auto px-16 py-20">
                    <SectionTitle subHeading="Don't miss" Heading="TODAY'S OFFER"></SectionTitle>
                    <MenuCategory items={offered}></MenuCategory>
                </div>
            </section >

            <section>
                <Cover image={dessertImg} title="dessert"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></Cover>
                <div className=" container mx-auto px-16 py-20">
                    <MenuCategory items={dessert} title="dessert" ></MenuCategory>
                </div>
            </section >

            <section>
                <Cover image={pizzaImg} title="pizza"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></Cover>
                <div className=" container mx-auto px-16 py-20">
                    <MenuCategory items={pizza} title="pizza"></MenuCategory>
                </div>
            </section >

            <section>
                <Cover image={saladImg} title="salad"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></Cover>
                <div className=" container mx-auto px-16 py-20">
                    <MenuCategory items={salad} title="salad"></MenuCategory>
                </div>
            </section >

            <section>
                <Cover image={soupImg} title="soup"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></Cover>
                <div className=" container mx-auto px-16 py-20">
                    <MenuCategory items={soup} title="soup"></MenuCategory>
                </div>
            </section >

        </div >
    );
};

export default Menu;