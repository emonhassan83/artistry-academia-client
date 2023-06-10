import { Fade } from "react-awesome-reveal";

const PopularInstructorCard = ({instructor}) => {
    return (
      <Fade duration={2000}>
        <div className="card w-full bg-base-100">
        <figure>
          <img
            src={instructor?.image}
            alt="Instructor Image"
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">Name: {instructor?.name}</h2>
          <p className="">Email: {instructor?.email}</p>
        </div>
      </div>
      </Fade>
    );
  };
  
  export default PopularInstructorCard;
  