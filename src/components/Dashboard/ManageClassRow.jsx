import { useState } from "react";
import FeedbackModal from "./Modal/FeedbackModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteAClass } from "../../api/classes/classes";
import toast, { Toaster } from "react-hot-toast";

const ManageClassRow = ({
  classData,
  index,
  handleMakeApprove,
  handleMakeDeny,
  refetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteAClass = (classId) => {
    deleteAClass(classId);
    toast.success("Class deleted successfully");
    refetch();
  };

  return (
    <>
    <Toaster/>
      <tr key={classData._id}>
        <td>{index + 1}</td>
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
        <td>${classData?.price}</td>
        <td>{classData?.status}</td>
        <td>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleMakeApprove(classData)}
              className="btn btn-xs btn-color"
              disabled={
                classData?.status === "approved" || classData?.status === "deny"
              }
            >
              Approve
            </button>
            <button
              onClick={() => handleMakeDeny(classData)}
              className="btn btn-xs btn-color"
              disabled={
                classData?.status === "deny" || classData?.status === "approved"
              }
            >
              Deny
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-xs btn-color"
              disabled={classData?.status === "approved" || classData?.feedback}
            >
              Send Feedback
            </button>
          </div>
          <FeedbackModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            closeModal={closeModal}
            classData={classData}
            refetch={refetch}
            id={classData._id}
          />
        </td>
        {/* TODO DELETE FUNCTION ADD */}
        <td>
          <button onClick={()=> handleDeleteAClass(classData._id)}>
            <RiDeleteBin6Line className=" w-6 h-5 mx-auto text-color" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageClassRow;
