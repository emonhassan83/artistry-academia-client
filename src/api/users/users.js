/* eslint-disable no-useless-catch */
import axios from 'axios';
import { axiosInstance } from '../../utils/axiosInstance';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

//* save a user to database
export const saveUser = async (user) => {
  const currentUser = {
    name: user?.name || "unknown",
    email: user.email,
    image: user?.image,
    role: 'student',
    isDeleted: false,
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await api.put(`/users/${user?.email}`, currentUser);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
};

//* save a user to database
export const saveUserBySocial = async (user) => {
  console.log(user);
  const currentUser = {
    name: user?.displayName || "unknown",
    email: user.email,
    image: user?.photoUrl,
    role: 'student',
    isDeleted: false,
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await api.put(`/users/${user?.email}`, currentUser);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
};

//* Get all users
export const fetchAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//update a user to database
export const updateUser = async (userData) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${userData?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();
  return data;
};

//Delete a user to database
export const deleteAUser = async (id) => {
  await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
    method: "DELETE",
  });
};

// Get role
export const getRole = async (email) => {
  const response = await axiosInstance.get(
    `/users/${email}`
  );
  const user = await response?.data?.data;
  return user?.role;
};
