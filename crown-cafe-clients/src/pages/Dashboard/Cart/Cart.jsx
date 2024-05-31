import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import UseCarts from "../../../Hook/UseCarts";
import { axiosSecure } from "../../../Hook/AxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = UseCarts();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch(),
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Item has been deleted.",
                                    icon: "success"
                                });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-around">
                <h1 className="text-5xl my-20">Total orders: {cart.length}</h1>
                <h1 className="text-5xl my-20">Total Price: ${totalPrice}</h1>
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn bg-yellow-500 text-4xl my-20">Pay</button>
                </Link>
                    :
                    <button disabled className="btn bg-yellow-500 text-4xl my-20">Pay</button>}
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-xl">
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={item?.image} className="w-24" alt="" /></td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td >
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-3xl">
                                            <MdDeleteOutline />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;