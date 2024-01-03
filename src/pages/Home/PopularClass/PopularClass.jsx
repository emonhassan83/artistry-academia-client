/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PopularClassCard from "../../../components/Card/PopularClassCard";
import Container from "../../../components/Container/Container";
import CardSkeleton from "../../../components/Card/CardSkeleton";
import useApproveClass from "../../../hooks/usePopularClass";

const PopularClass = () => {
  const { approveClass, loading, error } = useApproveClass([]);

  return (
    <Container>
      <h2 className="primary-font text-3xl sm:text-5xl uppercase mt-16 sm:mt-32  text-center ">
        Popular Classes
      </h2>
      <p className="mt-3 italic text-base sm:text-lg text-center mb-10">
        Discover our popular art classes and explore your creative potential
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading &&
          Array.from(new Array(6)).map((item, index) => (
            <CardSkeleton key={index} height={300} />
          ))}
        {!loading &&
          approveClass
            .slice(0, 6)
            .map((classData) => (
              <PopularClassCard key={classData._id} classData={classData} />
            ))}
      </div>
    </Container>
  );
};

export default PopularClass;
