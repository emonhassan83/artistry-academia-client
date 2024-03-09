import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteAUser } from "../../api/users";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "../../providers/ThemeProvider";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { theme } = useTheme(); // for using light and dark themes

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} Made Admin Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} Made Instructor Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteAUser = (userId) => {
    deleteAUser(userId);
    toast.success("User deleted successfully");
    refetch();
  };

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Artistry Academia | Manage Users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className={`table ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
          <thead className={`${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
            <tr>
              <th>SL</th>
              <th>User Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.image}
                          alt="User Image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-xs btn-color"
                      disabled={user.role === "admin"}
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-xs btn-color"
                      disabled={user.role === "instructor"}
                    >
                      Instructor
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteAUser(user._id)}
                    disabled={user.role === "admin"}
                    className={`${
                      user.role === "admin" ? "text-gray-300" : "text-color"
                    }`}
                  >
                    <RiDeleteBin6Line className=" w-6 h-5 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
