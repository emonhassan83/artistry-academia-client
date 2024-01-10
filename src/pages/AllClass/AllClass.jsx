/* eslint-disable no-unused-vars */
import ClassCard from "../../components/Card/ClassCard";
import Container from "../../components/Container/Container";
import { Helmet } from "react-helmet-async";
import useApproveClass from "../../hooks/usePopularClass";
import CardSkeleton from "../../components/Card/CardSkeleton";

const AllClass = () => {
  const { approveClass, loading, error } = useApproveClass([]);

  return (
    <Container>
      <Helmet>
        <title>Artistry Academia | All Classes</title>
      </Helmet>
      <div className="mt-16 mb-10">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading &&
            Array.from(new Array(8)).map((item, index) => (
              <CardSkeleton key={index} height={300} />
            ))}
          {!loading &&
            approveClass.length > 0 &&
            approveClass.map((classData) => (
              <ClassCard key={classData._id} classData={classData} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AllClass;
