import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
    return (
        <div>
            <SectionTitle
                subHeading="What's new?"
                Heading="ADD AN ITEM"
            ></SectionTitle>

            <section className="w-3/4 mx-auto bg-gray-200 p-14" >
                <form >
                    <div className="space-y-2 mb-4">
                        <label className="font-medium block">Recipe name*</label>
                        <input
                            type="text" name="recipeName"
                            placeholder="Recipe name"
                            className="input input-bordered rounded-none w-full"
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="md:text-lg font-medium block">Category*</label>
                            <select name='category' className="select select-bordered rounded-none w-full">
                                <option disabled selected>Select Category</option>
                                <option>Salad</option>
                                <option>Pizaa</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="font-medium block">Recipe name*</label>
                            <input
                                type="text" name="recipeName"
                                placeholder="Recipe name"
                                className="input input-bordered rounded-none w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className=" space-y-2 mb-4">
                        <label className="font-medium block">Recipe Details*</label>
                        <textarea
                            rows="5"
                            name='recipeDetails'
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered rounded-none w-full"
                            required></textarea>
                    </div>

                    <div className=" space-y-2 mb-4">
                        <input type="file" className="bg-gray-100 file-input w-full max-w-xs" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddItem;