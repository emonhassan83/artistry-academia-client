/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import CardSkeleton from "../../../components/Card/CardSkeleton";
import PopularInstructorCard from "../../../components/Card/PopularInstructorCard";
import Container from "../../../components/Container/Container";
import usePopularInstructors from "../../../hooks/usePopularInstructors";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomArrowButton from "../../../utils/CustomArrowButton";

const PopularInstructors = () => {
  const { popularInstructors, loading, error } = usePopularInstructors([]);

  return (
    <Container>
      <h2 className="primary-font font-semibold text-[22px] sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-14 md:mt-20 lg:mt-32 sm:text-center">
        Popular Instructors
      </h2>
      <p className="sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg sm:text-center mb-6 sm:mb-8">
        Meet our popular instructors who bring passion and expertise to our art
        classes
      </p>
      {/* For large devices */}
      <Link to="/instructors">
        <div className="hidden sm:flex justify-end mb-3 md:mb-4">
          <CustomArrowButton props={"SSee all instructors"} />
        </div>
      </Link>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading &&
          Array.from(new Array(8)).map((item, index) => (
            <CardSkeleton key={index} height={300} />
          ))}
        {!loading &&
          popularInstructors &&
          popularInstructors
            .slice(0, 8)
            .map((instructor) => (
              <PopularInstructorCard
                key={instructor._id}
                instructor={instructor}
              />
            ))}
      </div>
      {/* For phone devices */}
      <Link to="/instructors">
        <div className="btn btn-color btn-xs mx-auto w-32 mt-1 sm:mt-2 flex sm:hidden items-center justify-center group cursor-pointer mb-2">
          <button className="text-[10px] sm:text-xs uppercase font-semibold hover:underline">
            See all instructors
          </button>
        </div>
      </Link>
    </Container>
  );
};

export default PopularInstructors;
