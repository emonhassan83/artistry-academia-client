import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { selectClass } from "../../api/classes";
import Swal from "sweetalert2";
import { useTheme } from "../../providers/ThemeProvider";

const ClassCard = ({ classData }) => {
    const {user, role} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);
    const { theme } = useTheme(); // for using light and dark themes

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
        className="h-[280px] md:h-[320px] rounded-md"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div className={`card-body ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'} grid place-items-center`}>
        <h2 className="card-title">{className}</h2>
        <p className="font-semibold">Instructor: {instructorName}</p>
        
            <p className="text-sm -my-[2px] font-medium">Available Seats: {seats}</p>
            <p className="text-sm -my-[2px] font-medium">Course Free: ${price}</p>
       
        <div className="card-actions justify-center mt-2">
          <button onClick={saveClassToDb} className="btn btn-sm" disabled={role === 'admin' || role === 'instructor' || disabled}>Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
