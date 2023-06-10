import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get('/users');
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
  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Manage Users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
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
                      className="btn btn-xs"
                      disabled={user.role === "admin"}
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-xs"
                      disabled={user.role === "instructor"}
                    >
                      Instructor
                    </button>
                  </div>
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
