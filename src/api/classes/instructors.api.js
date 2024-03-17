import { axiosInstance } from "../axiosInstance";

//* Add a course in Database
export const addClass = async (classData) => {
    try {
      const res = await axiosInstance.post("/class", classData);
      return res.data;
    } catch (error) {
      console.error("Error adding class:", error);
      throw error;
    }
  };

//* Update a class by Instructor
export const updateAClass = async (updateData, id) => {
    try {
      const res = await axiosInstance.patch(`/update-class/${id}`, updateData);
      return res.data;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  };