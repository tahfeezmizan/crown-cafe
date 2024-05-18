
const Cover = ({ image, title }) => {
    return (
        <div className="menuCover flex flex-col items-center justify-center" style={{
            background: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="container mx-auto py-32 bg-[rgba(21,21,21,0.6)] text-white text-center">
                    <h1 className="text-7xl font-Cinezl font-bold mb-2">{title}</h1>
                    <p className="text-2xl font-semibold">Would you like to try a dish?</p>
            </div>
        </div>
    );
};

export default Cover;