import ClassCard from "../../components/Card/ClassCard";
import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";

const AllClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URL}/approveClass`)
    .then(res => res.json())
    .then(data => setClasses(data))
  }, [])
 
  return (
    <Container>
      <Helmet>
        <title>Artistry Academia | All Classes</title>
      </Helmet>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {classes.length > 0 && classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData} />
        ))}
      </div>
    </Container>
  );
};

export default AllClass;
