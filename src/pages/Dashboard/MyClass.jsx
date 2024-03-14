import { Helmet } from "react-helmet-async";
import { useClassByEmail } from "../../hooks/useClass";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import UpdateClassModal from "../../components/Dashboard/Modal/UpdateClassModal";
import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { deleteAClass } from "../../api/classes";

const MyClass = () => {
  const [classes] = useClassByEmail();
  const [selectedClass, setSelectedClass] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); //* for using light and dark themes

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdateAClass = (classData) => {
    setSelectedClass(classData);
    setIsOpen(true);
  };

  const handleDeleteAClass = async (classId) => {
    try {
      const res = await deleteAClass(classId);
      res.deletedCount && toast.success("Delete this class Successfully !");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (classes && classes?.data?.length < 1) {
    return (
      <div className="h-[94vh] w-[100%] flex items-center justify-center">
        <p className="text-sm text-red-500 font-medium">
          Instructor class not found !
        </p>
      </div>
    );
  }

  return (
    <div>
      <Toaster />
      <Helmet>
        <title>Artistry Academia | My Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table
          className={`table ${
            theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {/* head */}
          <thead
            className={`${
              theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>ClassName</th>
              <th className="text-center">Status</th>
              <th className="text-center">Total Enrolled</th>
              <th>Feedback</th>
              <th className="text-center">Availed seats</th>
              <th className="text-center">Actions</th>
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
                          <img src={classData?.classImage} alt="Class Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classData?.className}</td>
                  <td className="text-center">{classData?.status}</td>
                  <td className="text-center">{classData?.enrolledCourse}</td>
                  <td>
                    {classData?.feedback ? classData.feedback : "No Feedback"}
                  </td>
                  <td className="text-center">{classData?.seats}</td>
                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => handleUpdateAClass(classData)}
                        className="btn btn-xs btn-color"
                      >
                        Update
                      </button>
                      <button onClick={() => handleDeleteAClass(classData._id)}>
                        <RiDeleteBin6Line className=" w-6 h-5 mx-auto text-color" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <UpdateClassModal
          isOpen={isOpen}
          closeModal={closeModal}
          classData={selectedClass}
          id={selectedClass?._id}
        />
      )}
    </div>
  );
};

export default MyClass;
