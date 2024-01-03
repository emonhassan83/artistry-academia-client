import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const useApproveClass = () => {
  const [approveClass, setApproveClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = 'approveClass';
    const fetchApproveClass = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(url);
        if (status === 200) {
            setApproveClass(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchApproveClass();
  }, []);
  return {
    approveClass,
    loading,
    error,
  };
};

export default useApproveClass;
