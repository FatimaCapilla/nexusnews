import axios from "axios";

const URLAPI_NEWS = 'http://localhost:3000/api/news/';
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }

export const getNews = async () => {
  try {
    const response = await axios.get(URLAPI_NEWS, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getOneNews = async (id) => {
  try {
    const response = await axios.get(`${URLAPI_NEWS + id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const createNews = async (newData) => {
  try {
    const response = await axios.post(`${URLAPI_NEWS}`, newData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${URLAPI_NEWS}${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}

export const updateNews = async (id, updatedData) => {
  try {
    const response = await axios.put(`${URLAPI_NEWS}${id}`, updatedData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};