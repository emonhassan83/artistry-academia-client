import { axiosInstance } from "../axiosInstance";

//* Add a select class by student
export const selectClass = async (classData) => {
    try {
      const res = await axiosInstance.post("/selectClass", classData);
      return res.data;
    } catch (error) {
      console.error("Error selecting class:", error);
      throw error;
    }
  };