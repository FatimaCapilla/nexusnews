import axios from "axios";
const URLAPI_NEWS = 'http://www.localhost:3000/api/news/';

export const getOneNews = async (id) =>{
  const token = localStorage.getItem('token')
  console.log(token)
  const headers = {'Authorization': `Bearer ${token}`}
  try {
    const response = await axios.get(`${URLAPI_NEWS+id}`);
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};


export const deleteNews = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {'Authorization': `Bearer ${token}`};
    const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?");
    if (confirmDelete) {
      const response = await axios.delete(`${URLAPI_NEWS}${id}`, {headers});
      if (response.status === 200) {
        alert('Eliminado correctamente');
      }
    }
  } catch(error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}



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
