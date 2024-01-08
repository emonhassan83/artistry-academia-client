// import { Fade } from "react-awesome-reveal";
import { AiOutlineArrowRight } from "react-icons/ai";

const PopularInstructorCard = ({instructor}) => {
    return (
      // <Fade duration={2000}>
        <div className="card w-full bg-base-100 rounded-none">
        <figure>
          <img
            className="w-full sm:h-[240px] lg:h-[200px] rounded-sm hover:scale-105 duration-[1500ms]"
            src={instructor?.image}
            alt="Instructor Image"
          />
        </figure>
        <div className="flex flex-col mt-2 sm:mt-3 lg:mt-4">
          <h2 className="text-base font-semibold">{instructor?.name}</h2>
          <div className="flex items-center gap-1 group cursor-pointer mt-1">
          <button className="text-color text-[11px] sm:text-xs uppercase font-semibold">Read Bio</button>
          <AiOutlineArrowRight className="text-sm sm:text-base text-color group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      // </Fade>
    );
  };
  
  export default PopularInstructorCard;
  