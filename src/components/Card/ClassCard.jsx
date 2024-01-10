import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { selectClass } from "../../api/classes";
import Swal from "sweetalert2";
import { useTheme } from "../../providers/ThemeProvider";

const ClassCard = ({ classData }) => {
  const { user, role } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const { theme } = useTheme(); // for using light and dark themes

  const { className, image, instructorName, seats, price } = classData;
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
      price,
    };
    selectClass(classData)
      .then((data) => {
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
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full bg-base-100">
      <figure>
        <img
          className="w-full sm:h-[240px] md:h-[210px] rounded-sm hover:scale-105 duration-[1500ms]"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div
        className={`mt-3 sm:mt-4${
          theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <h2 className="text-sm sm:text-base font-semibold">{className}</h2>
        <div className="text-xs sm:text-sm capitalize mt-1">
        <p>Instructor: {instructorName}</p>
        <p>
          Seats: {seats}
        </p>
        <p>Course Free: ${price}</p>
        </div>

        <div className="mt-1">
          <button
            onClick={saveClassToDb}
            className="btn btn-xs"
            disabled={role === "admin" || role === "instructor" || disabled}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
