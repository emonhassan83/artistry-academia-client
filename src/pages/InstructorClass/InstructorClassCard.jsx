/* eslint-disable no-unused-vars */
const InstructorClassCard = ({ course }) => {
  const { image, className, price, seats, instructorName } = course;
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg rounded-lg">
      <figure className="lg:w-[60%]">
        <img src={image} alt="Instructor Class" />
      </figure>
      <div className="card-body">
        <h2 className="text-sm sm:text-base font-semibold">{className}</h2>
        <p className="text-xs sm:text-sm">Available seats: {seats}</p>
        <p className="text-xs sm:text-sm">Price: {price}$</p>
      </div>
    </div>
  );
};

export default InstructorClassCard;
