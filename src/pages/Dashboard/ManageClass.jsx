import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ManageClassRow from "../../components/Dashboard/ManageClassRow";

const ManageClass = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
    return res.json();
  });

  const handleMakeApprove = (classes) => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/approved/${classes?._id}`, {
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
            title: `Class Approve Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeDeny = (classes) => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/deny/${classes?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Class Deny Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Manage Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th> Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes.map((classData, index) => (
                <ManageClassRow
                  key={classData._id}
                  classData={classData}
                  index={index}
                  handleMakeApprove={handleMakeApprove}
                  handleMakeDeny={handleMakeDeny}
                  refetch={refetch}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
