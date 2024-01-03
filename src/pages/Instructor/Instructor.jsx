/* eslint-disable no-unused-vars */
import InstructorCard from "../../components/Card/InstructorCard";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import usePopularInstructors from "../../hooks/usePopularInstructors";
import CardSkeleton from "../../components/Card/CardSkeleton";

const Instructor = () => {
  const { popularInstructors, loading, error } = usePopularInstructors([]);
  return (
    <Container>
      <Helmet>
        <title>Artistry Academia | Instructor</title>
      </Helmet>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 `}>
      {loading &&
          Array.from(new Array(6)).map((item, index) => (
            <CardSkeleton key={index} height={300} />
          ))}
        {!loading && popularInstructors &&
          popularInstructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
      </div>
    </Container>
  );
};

export default Instructor;
