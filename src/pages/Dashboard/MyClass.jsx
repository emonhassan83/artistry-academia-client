import { Helmet } from "react-helmet-async";
import { useClassByEmail } from "../../hooks/useClass";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import UpdateClassModal from "../../components/Dashboard/Modal/UpdateClassModal";
import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
//import { deleteAClass } from "../../api/classes";

const MyClass = () => {
  const [classes] = useClassByEmail();
  console.log(classes);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // for using light and dark themes

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

  if (classes && classes?.data?.length < 1) {
    return <div className="h-[94vh] w-[100%] flex items-center justify-center">
      <p className="text-sm text-red-500 font-medium">Instructor class not found !</p>
    </div>
  }

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Artistry Academia | My Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className={`table ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
          {/* head */}
          <thead className={`${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
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
              classes?.data?.map((classData, index) => (
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
