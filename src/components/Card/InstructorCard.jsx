const InstructorCard = ({instructor}) => {
  return (
    <div className="card w-full bg-base-100">
      <figure>
        <img
          src={instructor?.image}
          alt="Instructor Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor Name: {instructor?.name}</h2>
        <p className="">Instructor Email: {instructor?.email}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-sm">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
