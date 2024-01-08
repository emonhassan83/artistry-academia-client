import { Fade } from "react-awesome-reveal";
import { AiOutlineArrowRight } from "react-icons/ai";

const PopularClassCard = ({ classData }) => {
  const { className, image, instructorName } = classData;
  return (
    //  <Fade duration={2000}>
    <div className="card w-full bg-base-100 rounded-none">
      <figure>
        <img
          className="w-full sm:h-[240px] lg:h-[200px] rounded-sm hover:scale-105 duration-[1500ms]"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div className="flex flex-col mt-2 sm:mt-3 lg:mt-4">
        <h2 className="text-base font-semibold">{className}</h2>
        <p className="text-sm">Instructor: {instructorName}</p>
        <div className="mt-1 sm:mt-2 flex items-center group cursor-pointer">
          <button className="text-color text-[11px] sm:text-xs uppercase font-semibold">
            View Details
          </button>
          <AiOutlineArrowRight className="text-sm sm:text-base text-color group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
    //  </Fade>
  );
};

export default PopularClassCard;
