/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

//* Add instructor bio
export const addInstructorBio = async (bioData) => {
    try {
      const response = await api.post('/save-instructor-bio', bioData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

//* get instructor bio by instructorId
