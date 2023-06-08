import Swal from "sweetalert2";
import { useSelectClass } from "../../hooks/useSelectClass";

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
              classes.map((classData, index) => (
                <tr key={classData._id}>
                <td>{index+1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classData?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  <td>{classData?.seats}</td>
                  <td>
                    <button onClick={()=> handleDelete(classData._id)}  className="btn btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-xs">${classData?.price} tk.</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
