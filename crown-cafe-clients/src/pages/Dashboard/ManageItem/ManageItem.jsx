import { MdDeleteOutline } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../Hook/useMenu";
import Swal from "sweetalert2";
import AxiosSecure from "../../../Hook/AxiosSecure";

const ManageItem = () => {
    const [menu] = useMenu();
    const axiosSecure = AxiosSecure();

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${user}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Item has been deleted.",
                        icon: "success"
                    });
                    // Optionally, you can refetch the menu or update the state to reflect the deletion
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeading="Hurry Up"
                Heading="Manage All Items"
            ></SectionTitle>

            <div className="w-3/4 mx-auto bg-white p-10">
                <div className="overflow-x-auto">
                    <h1 className="text-4xl mb-6">Total User</h1>
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-xl">
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((item, index) => (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="w-32" src={item?.image} alt="" /></td>
                                        <td>{item?.name}</td>
                                        <td>${item?.price}</td>
                                        <td>
                                            <button className="text-2xl">
                                                <FaRegEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="text-3xl">
                                                <MdDeleteOutline />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
