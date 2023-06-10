import { useState } from "react";
import FeedbackModal from "./Modal/FeedbackModal";

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

  return (
    <>
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
        <td>{classData?.email}</td>
        <td>{classData?.seats}</td>
        <td>${classData?.price}</td>
        <td>{classData?.status}</td>
        <td>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleMakeApprove(classData)}
              className="btn btn-xs"
              disabled={
                classData?.status === "approved" || classData?.status === "deny"
              }
            >
              Approve
            </button>
            <button
              onClick={() => handleMakeDeny(classData)}
              className="btn btn-xs"
              disabled={
                classData?.status === "deny" || classData?.status === "approved"
              }
            >
              Deny
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-xs"
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
      </tr>
    </>
  );
};

export default ManageClassRow;
