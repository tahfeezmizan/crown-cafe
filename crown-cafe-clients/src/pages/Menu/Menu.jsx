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
    console.log(menu);

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

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
                <MenuCategory items={dessert} title={"dessert"} image={dessertImg} ></MenuCategory>
            </section >

            <section>
                <MenuCategory items={pizza} title={"pizza"} image={pizzaImg}></MenuCategory>
            </section >

            <section>
                <MenuCategory items={salad} title={"salad"} image={saladImg}></MenuCategory>
            </section >

            <section>
                <MenuCategory items={soup} title={"soup"} image={soupImg}></MenuCategory>
            </section >
            <section>
                <MenuCategory items={drinks} title={"drinks"} image={bgImg}></MenuCategory>
            </section >

        </div >
    );
};

export default Menu;