import { axiosInstance } from "../axiosInstance";

//* Delete a class to database by instructor
export const deleteAClass = async (id) => {
  try {
    const res = await axiosInstance.delete(`/delete-class/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting class:", error);
    throw error;
  }
};
