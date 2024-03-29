// import { Fade } from "react-awesome-reveal";
import ShowBioModal from "../modal/ShowBioModal";

const PopularInstructorCard = ({instructor}) => {

    return (
      // <Fade duration={2000}>
        <div className="card bg-base-100 rounded-none">
        <figure>
          <img
            className="w-full rounded-sm hover:scale-105 duration-[1500ms]"
            src={instructor?.image}
            alt="Instructor Image"
          />
        </figure>
        <div className="flex flex-col mt-2 sm:mt-3 lg:mt-4">
          <h2 className="text-sm sm:text-base font-semibold">{instructor?.name}</h2>
          <div className="mt-1 flex justify-start mb-3 md:mb-4">
          <ShowBioModal instructor={instructor}/>
        </div>
        </div>
      </div>
      // </Fade>
    );
  };
  
  export default PopularInstructorCard;
  