import ClassCard from "../../components/Card/ClassCard";
import { useEffect, useState } from "react";

const AllClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URL}/approveClass`)
    .then(res => res.json())
    .then(data => setClasses(data))
  }, [])
 
  return (
    <div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {classes.length > 0 && classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData} />
        ))}
      </div>
    </div>
  );
};

export default AllClass;
