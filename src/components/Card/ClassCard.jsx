/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useTheme } from "../../providers/ThemeProvider";
import CustomArrowButton from "../../utils/CustomArrowButton";
import { Link } from "react-router-dom";

const ClassCard = ({ classData }) => {
  const { role } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const { theme } = useTheme(); //* for using light and dark themes

  const { _id ,className, classImage } = classData;

  /// save class in db
  // const saveClassToDb = () => {
  //   const classData = {
  //     name: user?.displayName,
  //     userImg: user?.photoURL,
  //     email: user?.email,
  //     className,
  //     classImage,
  //     instructorName,
  //     seats,
  //     courseFree,
  //   };
  //   selectClass(classData)
  //     .then((data) => {
  //       console.log(data);
  //       setDisabled(true);
  //       if (data.insertedId) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Class added successfully",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="w-full bg-base-100">
      <figure>
        <img
          className="w-full sm:h-[240px] md:h-[210px] rounded-sm hover:scale-105 duration-[1500ms]"
          src={classImage}
          alt="Class Image"
        />
      </figure>
      <div
        className={`mt-3 sm:mt-4${
          theme.mode === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <h2 className="text-sm sm:text-base font-semibold">{className}</h2>
        <div className="mt-3">
          {/* <button
            className="btn btn-xs"
            disabled={role === "admin" || role === "instructor" || disabled}
          >
            Select Class
          </button> */}
          <Link to={`/classes/class-details/${_id}`}>
        <CustomArrowButton props={"View Details"} />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
