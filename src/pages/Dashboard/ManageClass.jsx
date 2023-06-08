import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import FeedbackModal from "../../components/Dashboard/Modal/FeedbackModal";
import { useState } from "react";

const ManageClass = () => {
  const [modal, setModal] = useState(false);

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

  const modalHandler = id => {
    console.log('Modal Clicked');
  }

  const closeModal = () => {
    setModal(false);
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
            { classes &&
              classes.map((classData, index)=>(<tr key={classData._id}>
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
                <td>{classData?.instructorEmail}</td>
                <td>{classData?.seats}</td>
                <td>${classData?.price}</td>
                <td>{classData?.status}</td>
                <td>
                  <div className="flex items-center gap-1">
                      <button onClick={()=> handleMakeApprove(classData)} className="btn btn-xs" disabled={classData?.status === 'approved' || classData?.status === 'deny'}>Approve</button>
                      <button onClick={()=> handleMakeDeny(classData)} className="btn btn-xs" disabled={classData?.status === 'deny' || classData?.status === 'approved'}>Deny</button>
                      <button onClick={ ()=> setModal(true) } className="btn btn-xs">Send Feedback</button>
                  </div>
                <FeedbackModal id={classData._id} modalHandler={modalHandler} isOpen={modal} closeModal={closeModal}/>
                </td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
