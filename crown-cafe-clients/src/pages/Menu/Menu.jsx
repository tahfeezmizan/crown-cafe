import { Helmet } from "react-helmet-async";
import Cover from "./Cover/Cover";
import bgImg from "../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu - Crown Cafe Restaurant</title>
            </Helmet>
            <Cover image={bgImg} title="OUR MENU"></Cover>

        </div>
    );
};

export default Menu;