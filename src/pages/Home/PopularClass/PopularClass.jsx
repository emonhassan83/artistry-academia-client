import { useEffect, useState } from "react";
import PopularClassCard from "../../../components/Card/PopularClassCard";
import Container from "../../../components/Container/Container";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() =>{
      fetch(`${import.meta.env.VITE_API_URL}/approveClass`)
      .then(res => res.json())
      .then(data => setPopularClass(data))
    }, [])

    return (
        <Container>
            <h2 className="primary-font text-5xl uppercase mt-32 text-center mb-10">Popular Classes</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    popularClass.slice(0,6).map(classData =><PopularClassCard key={classData._id} classData={classData}/>)
                }
            </div>
        </Container>
    );
};

export default PopularClass;