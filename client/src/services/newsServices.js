import axios from "axios";

const URLAPI_NEWS = 'http://localhost:3000/api/news/';

export const getOneNews = async (id) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  try {
    const response = await axios.get(`${URLAPI_NEWS}${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?");
    if (confirmDelete) {
      const response = await axios.delete(`${URLAPI_NEWS}${id}`, { headers });
      if (response.status === 200) {
        alert('Eliminado correctamente');
      }
    }
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};

// Función para obtener todas las noticias
export const getNews = async () => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  try {
    const response = await axios.get(URLAPI_NEWS, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Función para obtener una noticia por su ID
export const getById = async (id) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  try {
    const response = await axios.get(`${URLAPI_NEWS}${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with ID ${id}:`, error);
    throw error;
  }
};

export const updateNews = async (id, updatedData) => {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };
  try {
    const response = await axios.put(`${URLAPI_NEWS}${id}`, updatedData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};
