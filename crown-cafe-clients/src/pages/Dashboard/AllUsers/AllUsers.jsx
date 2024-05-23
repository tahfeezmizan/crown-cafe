import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AxiosSecure from "../../../Hook/AxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = AxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });

    const handleMakeAdmin = users => {
        axiosSecure.patch(`/users/admin/${users}`)
        .then(res => {
            console.log(res.data);
            if(res?.data?.modifiedCount){
                refetch();
                alert(`${users?.name} Is Admin Now!`)
            }
        })
    }

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user}`)
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
            <SectionTitle
                subHeading="How Many??"
                Heading="Manage All Users"
            ></SectionTitle>

            <div className="w-3/4 mx-auto bg-white p-10">
                <div className="overflow-x-auto">
                    <h1 className="text-4xl mb-6">Total User {users.length}</h1>
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-xl">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {user?.role=== 'admin' ? "Admin" : <button
                                            onClick={() => handleMakeAdmin(user?._id)}
                                            className="text-2xl">
                                            <FaUser />
                                        </button>}
                                    </td>
                                    <td >
                                        <button
                                            onClick={() => handleDeleteUser(user?._id)}
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

export default AllUsers;