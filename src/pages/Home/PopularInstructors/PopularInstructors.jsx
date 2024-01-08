/* eslint-disable no-unused-vars */
import CardSkeleton from "../../../components/Card/CardSkeleton";
import PopularInstructorCard from "../../../components/Card/PopularInstructorCard";
import Container from "../../../components/Container/Container";
import usePopularInstructors from "../../../hooks/usePopularInstructors";

const PopularInstructors = () => {
  const { popularInstructors, loading, error } = usePopularInstructors([]);

  return (
    <Container>
      <h2 className="primary-font text-[22px] sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-10 md:mt-20 lg:mt-32 text-center">
        Popular Instructors
      </h2>
      <p className="sm:mt-3 italic text-xs sm:text-sm md:text-base lg:text-lg text-center mb-6 sm:mb-10">
        Meet our popular instructors who bring passion and expertise to our art
        classes
      </p>
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
    </Container>
  );
};

export default PopularInstructors;
