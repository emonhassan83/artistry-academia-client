/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";

export const fetchInstructorClass = (email) => {
  const [instructorClass, setInstructorClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `/myClass/${email}`;
    const fetchInstructorClass = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(url);
        if (status === 200) {
          setInstructorClass(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchInstructorClass();
  }, [email]);
  return {
    instructorClass,
    loading,
    error,
  };
};

export const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });

  return [isInstructor, isInstructorLoading];
};
