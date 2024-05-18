import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BgImage from "../../../assets/home/featured.jpg"

const Feactured = () => {
    return (
        <section className="bg-fixed" style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='container mx-auto py-20 text-white' >

                <SectionTitle
                    subHeading="Check it out"
                    Heading="FROM OUR MENU"
                ></SectionTitle>

                <div className="flex justify-between items-center gap-20">
                    <div className="flex-1">
                        <img src={BgImage} alt="" />
                    </div>
                    <div className="flex-1 text-2xl font-Ineter">
                        <p className="">March 20, 2023</p>
                        <h2 className="">WHERE CAN I GET SOME?</h2>
                        <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <button className="btn btn-outline text-xl font-semibold text-white border-white border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Feactured;