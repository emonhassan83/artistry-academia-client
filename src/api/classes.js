import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// Add a class
export const addClass = async (classData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classData),
  });

  const data = await response.json();
  return data;
};

// Add a select class by student
export const selectClass = async (classData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/selectClass`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classData),
  });

  const data = await response.json();
  return data;
};

//* Update a class by Instructor
export const updateAClass = async (updateData, id) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/update-class/${id}`,
      updateData
    );
    
    const queryClient = new QueryClient();
    queryClient.invalidateQueries('classes');
    return response.data;
  } catch (error) {
    console.error("Error updating class:", error);
    throw error;
  }
};

// Give feedback a class by admin by feedback massage
export const feedbackAClass = async (classData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(classData),
  });

  const data = await response.json();
  return data;
};

//* Delete a class to database by instructor
export const deleteAClass = async (id) => {
  try {
    const response =  await axios.delete(`${import.meta.env.VITE_API_URL}/delete-class/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error deleting class:", error);
    throw error;
  }
};
