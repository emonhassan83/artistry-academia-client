import { axiosInstance } from "../axiosInstance";

//* Give feedback a class by admin by feedback massage
export const feedbackAClass = async (classData, id) => {
    try {
      const res = await axiosInstance.patch(`/class/${id}`, classData);
      return res.data;
    } catch (error) {
      console.error("Error giving feedback:", error);
      throw error;
    }
  };