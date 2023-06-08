import { useEffect, useState } from "react";

const Instructor = () => {
   const [instructors, setInstructors] = useState();

   useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
    .then(res => res.json())
    .then(data => setInstructors(data))
    .then()
   },[])
   console.log(instructors);
    return (
        <div>
            handleLogOut
        </div>
    );
};

export default Instructor;