import { useEffect, useState } from "react";
import InstructorCard from "../../components/Card/InstructorCard";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .then();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Artistry Academia | Instructor</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors &&
          instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
      </div>
    </Container>
  );
};

export default Instructor;
