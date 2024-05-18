import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bg1 from "../../../assets/home/01.jpg"
import Bg2 from "../../../assets/home/02.jpg"
import Bg3 from "../../../assets/home/03.png"
import Bg4 from "../../../assets/home/04.jpg"
import Bg5 from "../../../assets/home/05.png"
import Bg6 from "../../../assets/home/06.png"
import { Helmet } from "react-helmet-async";

const Banner = () => {
    return (
        <Carousel>
            <div className="">
            <Helmet>
                <title>Home - Crown Cafe Restaurant</title>
            </Helmet>
                <img className="object-cover" src={Bg1} />
            </div>
            <div className="">
                <img className="object-cover" src={Bg2} />
            </div>
            <div className="">
                <img className="object-cover" src={Bg3} />
            </div>
            <div className="">
                <img className="object-cover" src={Bg4} />
            </div>
            <div className="">
                <img className="object-cover" src={Bg5} />
            </div>
            <div className="">
                <img className="object-cover" src={Bg6} />
            </div>
        </Carousel>
    );
};

export default Banner;