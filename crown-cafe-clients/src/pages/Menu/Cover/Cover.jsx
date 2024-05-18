
const Cover = ({ image, title }) => {
    return (
        <div className="menuCover" style={{
            background: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="container mx-auto py-32 bg-black">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-7xl font-Cinezl font-bold mb-2">{title}</h1>
                    <p className="text-2xl font-semibold">Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;