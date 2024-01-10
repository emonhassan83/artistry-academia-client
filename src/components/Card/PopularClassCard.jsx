/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal";
import CustomArrowButton from "../../utils/CustomArrowButton";

const PopularClassCard = ({ classData }) => {
  const { className, image, instructorName } = classData;
  return (
    //  <Fade duration={2000}>
    <div className="card w-full bg-base-100 rounded-none">
      <figure>
        <img
          className="w-full sm:h-[240px] md:h-[210px] rounded-sm hover:scale-105 duration-[1500ms]"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div className="flex flex-col mt-2 sm:mt-3 lg:mt-4">
        <h2 className="text-sm sm:text-base font-semibold">{className}</h2>
        {/* <p className="text-xs sm:text-sm capitalize">Instructor: {instructorName}</p> */}
        <div className="mt-1 sm:mt-2 flex justify-start mb-3 md:mb-4">
          <CustomArrowButton props={"View Details"} />
        </div>
      </div>
    </div>
    //  </Fade>
  );
};

export default PopularClassCard;
