/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    name: user?.name || "unknown",
    email: user.email,
    image: user?.image,
    role: 'student'
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

//* Get all users
export const fetchAllUsers = async () => {
  try {
    const response = await api.get(`/users`);
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
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  return user?.role;
};
