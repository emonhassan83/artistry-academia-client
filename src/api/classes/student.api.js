import { axiosInstance } from "../axiosInstance";

//* Add a select course by student
export const selectClass = async (classData) => {
  try {
    const res = await axiosInstance.post("/selectClass", classData);
    return res.data;
  } catch (error) {
    console.error("Error selecting class:", error);
    throw error;
  }
};

//* Get all selected classes by student email
export const getSelectedClasses = async (email) => {
  try {
    const res = await axiosInstance.get("/selectedClass", {
      params: { email },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching selected classes:", error);
    throw error;
  }
};

//* Delete a selected class by student
export const deleteSelectedClass = async (id) => {
  try {
    const res = await axiosInstance.delete(`/class/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting selected class:", error);
    throw error;
  }
};