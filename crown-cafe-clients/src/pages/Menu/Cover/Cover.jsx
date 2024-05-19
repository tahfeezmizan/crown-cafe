import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={(`${image}`)}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="menuCover flex flex-col items-center justify-center" style={{
                background: `url()`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="container mx-auto py-32 bg-[rgba(21,21,21,0.6)] text-white text-center">
                    <h1 className="text-7xl font-Cinezl font-bold mb-2">{title}</h1>
                    <p className="text-2xl font-semibold">{description}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;