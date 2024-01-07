import { Fade } from "react-awesome-reveal";

const PopularClassCard = ({classData}) => {
    const {className, image, instructorName} = classData;
    return (
      //  <Fade duration={2000}>
         <div className="card w-full bg-base-100 rounded-none">
      <figure>
        <img
        className="h-[300px] rounded-sm"
          src={image}
          alt="Class Image"
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{className}</h2>
        <p className="font-semibold ">Instructor Name: {instructorName}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-sm btn-color text-xs sm:text-sm">View Details</button>
        </div>
      </div>
    </div>
      //  </Fade>
    );
};

export default PopularClassCard;