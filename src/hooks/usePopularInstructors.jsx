import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";

const usePopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = 'instructors';
    const fetchPopularInstructors = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(url);
        if (status === 200) {
            setPopularInstructors(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchPopularInstructors();
  }, []);
  return {
    popularInstructors,
    loading,
    error,
  };
};

export default usePopularInstructors;
