const InstructorCard = ({instructor}) => {
  return (
    <div className="card w-full bg-base-100">
      <figure>
        <img
        className="h-[240px] md:h-[280px]"
          src={instructor?.image}
          alt="Instructor Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex flex-col items-center">{instructor?.name}</h2>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-sm btn-color">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
