/* eslint-disable no-unused-vars */
const InstructorClassCard = ({ course }) => {
  const { image, className, price, seats, instructorName } = course;
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg">
      <figure className="lg:w-[60%]">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Available seats: {seats}</p>
        <p>Price: {price}$</p>
      </div>
    </div>
  );
};

export default InstructorClassCard;
