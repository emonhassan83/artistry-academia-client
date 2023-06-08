import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { selectClass } from "../../api/classes";
import Swal from "sweetalert2";

const ClassCard = ({ classData }) => {
    const {user, role} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);

    const {className, image, instructorName, seats, price} = classData;
    // save class in db
    const saveClassToDb = () => {

        const classData = {
            name: user?.displayName,
            userImg: user?.photoURL,
            email: user?.email,
            className,
            image,
            instructorName,
            seats,
            price
        }
        selectClass(classData)
        .then(data => {
            console.log(data); 
            setDisabled(true);
         if (data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });

         }
        })
        .catch(err => {
          console.log(err);
        })
    }
  return (
    <div className="card w-full bg-base-100">
      <figure>
        <img
        className="lg:h-[320px] rounded-md"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p className="font-semibold">Instructor Name: {instructorName}</p>
        <div className="flex items-center justify-between">
            <p>Available Seats: {seats}</p>
            <p>Course Free: ${price}</p>
        </div>
        <div className="card-actions justify-center mt-2">
          <button onClick={saveClassToDb} className="btn btn-sm" disabled={role === 'admin' || role === 'instructor' || disabled}>Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
