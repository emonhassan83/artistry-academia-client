// import { Fade } from "react-awesome-reveal";
import { AiOutlineArrowRight } from "react-icons/ai";

const PopularInstructorCard = ({instructor}) => {
    return (
      // <Fade duration={2000}>
        <div className="card w-full bg-base-100 rounded-none">
        <figure>
          <img
            className="rounded-sm"
            src={instructor?.image}
            alt="Instructor Image"
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{instructor?.name}</h2>
          <div className="flex items-center gap-1 group cursor-pointer">
          <p className="text-color uppercase font-semibold text-sm">Read Bio</p>
          <AiOutlineArrowRight className="text-color group-hover:translate-x-1 transition-transform"/>
          </div>
        </div>
      </div>
      // </Fade>
    );
  };
  
  export default PopularInstructorCard;
  