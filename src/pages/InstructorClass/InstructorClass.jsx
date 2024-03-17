import Container from "../../components/Container/Container";
import InstructorClassCard from "./InstructorClassCard";
import CardSkeleton from "../../components/Card/CardSkeleton";
import { useClassByEmail } from "../../hooks/useClass";
import { useParams } from "react-router-dom";

const InstructorClass = () => {
  const { email } = useParams();
  const [classes, isLoading] = useClassByEmail(email);

  return (
    <Container>
      <div className="my-10">
        <h2 className="sm:text-xl md:text-3xl uppercase text-center mb-10">
          Instructor Own Classes
        </h2>
        {!isLoading && classes.length === 0 && (
          <h5 className="text-center text-lg font-semibold">
            This Instructor has no own classes
          </h5>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading &&
            Array.from(new Array(2)).map((item, index) => (
              <CardSkeleton key={index} height={300} />
            ))}
          {!isLoading &&
            classes &&
            classes?.data?.map((course) => (
              <InstructorClassCard key={course._id} course={course} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default InstructorClass;
