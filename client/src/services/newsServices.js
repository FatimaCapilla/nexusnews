import axios from "axios";
const URLAPI_NEWS = 'http://www.localhost:3000/api/news';

// Función para obtener las noticias
export const getNews = async () => {
  const token = localStorage.getItem('token')
  console.log(token)
  const headers = {'Authorization': `Bearer ${token}`}
  try {
    const response = await axios.get(URLAPI_NEWS,{headers} );
    console.log(response)
    // if (!response.ok) {
    //   throw new Error('Error al obtener las noticias');
    // }
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
