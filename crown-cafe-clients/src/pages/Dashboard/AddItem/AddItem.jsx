import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";
import AxiosSecure from "../../../Hook/AxiosSecure";
import { toast } from "react-toastify";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = AxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });

        if (res.data?.success) {
            // now send the data to the server with image url
            const menuItem = {
                name: data?.name,
                recipe: data?.recipe,
                category: data?.category,
                price: parseFloat(data?.price),
                image: res.data?.data?.display_url,
            }

            // store data to database
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log('data send data base', menuRes.data);
            if (menuRes?.data?.insertedId) {
                toast.success('Added New Food in Menu')
            }
        }
        console.log('image url', res.data)
    }

    return (
        <div>
            <SectionTitle
                subHeading="What's new?"
                Heading="ADD AN ITEM"
            ></SectionTitle>

            <section className="w-3/4 mx-auto bg-gray-200 p-14" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2 mb-4">
                        <label className="font-medium block">Recipe name*</label>
                        <input
                            type="text" name="name"
                            placeholder="Recipe name"
                            className="input input-bordered rounded-none w-full"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="md:text-lg font-medium block">Category*</label>
                            <select name='category' className="select select-bordered rounded-none w-full"
                                {...register("category", { required: true })}>
                                <option disabled selected >Select Category</option>
                                <option>Salad</option>
                                <option>Pizaa</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="font-medium block">Price*</label>
                            <input
                                type="number" name="price"
                                placeholder="Recipe name"
                                className="input input-bordered rounded-none w-full"
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>

                    <div className=" space-y-2 mb-4">
                        <label className="font-medium block">Recipe Details*</label>
                        <textarea
                            rows="5"
                            name='recipe'
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered rounded-none w-full"
                            {...register("recipe", { required: true })}
                        ></textarea>
                    </div>

                    <div className=" space-y-2 mb-8">
                        <input type="file" name="image" className="bg-gray-100 file-input w-full max-w-xs"
                            {...register("image", { required: true })} />
                    </div>

                    <div className="">
                        <button className="btn rounded-none bg-yellow-600 text-white">Add Item <FaUtensils /></button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddItem;