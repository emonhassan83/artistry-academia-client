import Swal from "sweetalert2";
import { useSelectClass } from "../../hooks/useSelectClass";
import SelectedClassRow from "../../components/Dashboard/SelectedClassRow";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const [classes, refetch] = useSelectClass();


  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/class/${item}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  }
  
  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Selected Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>ClassName</th>
              <th>Instructors name</th>
              <th>Available seats</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 &&
              classes.map((classData, index) => <SelectedClassRow key={classData._id} classData={classData} handleDelete={handleDelete} index={index} refetch={refetch}/> )}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
