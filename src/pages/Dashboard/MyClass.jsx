import { Helmet } from "react-helmet-async";
import { useClassByEmail } from "../../hooks/useClass";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import UpdateClassModal from "../../components/Dashboard/Modal/UpdateClassModal";
import { useState } from "react";
//import { deleteAClass } from "../../api/classes";

const MyClass = () => {
  const [classes] = useClassByEmail();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  // TODO:
  const handleUpdateAClass = (classData) => {
    setIsOpen(true);
    console.log(classData);
  };

  const handleDeleteAClass = (classId) => {
    // deleteAClass(classId);
    console.log(classId);
    toast.success("Update Class Successfully");
  };

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Artistry Academia | My Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>ClassName</th>
              <th>Status</th>
              <th>Total Enrolled</th>
              <th>Feedback</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes.map((classData, index) => (
                <tr key={classData._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classData?.image} alt="Class Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classData?.className}</td>
                  <td>{classData?.status}</td>
                  <td>{classData?.totalEnrolled}</td>
                  <td>
                    {classData?.feedback ? classData.feedback : "No Feedback"}
                  </td>
                  <td>
                    <div>
                      <button
                        onClick={() => handleUpdateAClass(classData)}
                        className="btn btn-xs btn-color"
                      >
                        Update
                      </button>
                    </div>
                    <UpdateClassModal
                      isOpen={isOpen}
                      closeModal={closeModal}
                      classData={classData}
                      id={classData._id}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteAClass(classData._id)}>
                      <RiDeleteBin6Line className=" w-6 h-5 mx-auto text-color" />
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

export default MyClass;
