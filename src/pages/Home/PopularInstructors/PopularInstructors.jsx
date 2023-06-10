import { useEffect, useState } from "react";
import PopularInstructorCard from "../../../components/Card/PopularInstructorCard";
import Container from "../../../components/Container/Container";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState();

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/instructors`)
        .then((res) => res.json())
        .then((data) => setInstructors(data))
        .then();
    }, []);

    return (
        <Container>
            <h2 className="primary-font text-5xl uppercase mt-32 text-center mb-10">Popular Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors &&
          instructors.slice(0,6).map((instructor) => (
            <PopularInstructorCard key={instructor._id} instructor={instructor} />
          ))}
            </div>
        </Container>
    );
};

export default PopularInstructors;