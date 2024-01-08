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
      <h2 className="primary-font text-[22px] sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-10 sm:mt-20 lg:mt-32 text-center">
        Popular Classes
      </h2>
      <p className="sm:mt-3 italic text-xs sm:text-sm md:text-base lg:text-lg text-center mb-6 sm:mb-10">
        Discover our popular art classes and explore your creative potential
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading &&
          Array.from(new Array(8)).map((item, index) => (
            <CardSkeleton key={index} height={300} />
          ))}
        {!loading &&
          approveClass
            .slice(0, 8)
            .map((classData) => (
              <PopularClassCard key={classData._id} classData={classData} />
            ))}
      </div>
    </Container>
  );
};

export default PopularClass;
