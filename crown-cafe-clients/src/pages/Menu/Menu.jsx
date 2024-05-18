import { Helmet } from "react-helmet-async";
import Cover from "./Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu - Crown Cafe Restaurant</title>
            </Helmet>
            <Cover image={bgImg} title="OUR MENU"></Cover>

            <section className="py-20">
                <SectionTitle subHeading="Don't miss" Heading="TODAY'S OFFER"></SectionTitle>
                <MenuItem></MenuItem>
            </section>

        </div>
    );
};

export default Menu;