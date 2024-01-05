/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { fetchInstructorClass } from "../../hooks/useInstructor";
import InstructorClassCard from "./InstructorClassCard";
import CardSkeleton from "../../components/Card/CardSkeleton";

const InstructorClass = () => {
  const { email } = useParams();
  const { instructorClass, loading, error } = fetchInstructorClass(email);

  return (
    <Container>
      <h2 className="text-3xl uppercase text-center mt-4 mb-10">
        Instructor Own Classes
      </h2>
      {!loading && instructorClass.length === 0 && (
          <h5 className="text-center text-lg font-semibold">
            This Instructor has no own classes
          </h5>
        )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {loading &&
          Array.from(new Array(2)).map((item, index) => (
            <CardSkeleton key={index} height={300} />
          ))}
        {!loading &&
          instructorClass &&
          instructorClass.map((course) => (
            <InstructorClassCard key={course._id} course={course} />
          ))}
      </div>
    </Container>
  );
};

export default InstructorClass;
