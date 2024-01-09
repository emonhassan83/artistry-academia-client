/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PopularClassCard from "../../../components/Card/PopularClassCard";
import Container from "../../../components/Container/Container";
import CardSkeleton from "../../../components/Card/CardSkeleton";
import useApproveClass from "../../../hooks/usePopularClass";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopularClass = () => {
  const { approveClass, loading, error } = useApproveClass([]);

  return (
    <Container>
      <h2 className="primary-font font-semibold text-[22px] sm:text-3xl md:text-4xl lg:text-5xl uppercase mt-10 sm:mt-20 lg:mt-32 sm:text-center">
        Popular Classes
      </h2>
      <p className="sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg sm:text-center mb-6 sm:mb-8">
        Discover our popular art classes and explore your creative potential
      </p>
      {/* For large devices */}
      <Link to="/all-classes">
        <div className="hidden btn-sm mt-1 sm:mt-2 sm:flex items-center justify-end group cursor-pointer mb-2">
          <button className="text-color text-[10px] sm:text-xs uppercase font-semibold hover:underline">
            See all classes
          </button>
          <AiOutlineArrowRight className="text-xs sm:text-base text-color group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
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
      {/* For phone devices */}
      <Link to="/all-classes">
        <div className="btn btn-color btn-xs mx-auto w-28 mt-1 sm:mt-2 flex sm:hidden items-center justify-center group cursor-pointer mb-2">
          <button className="text-[10px] sm:text-xs uppercase font-semibold hover:underline">
            See all classes
          </button>
        </div>
      </Link>
    </Container>
  );
};

export default PopularClass;
