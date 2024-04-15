import axios from "axios";
const URLAPI_NEWS = 'http://www.localhost:3000/api/news';

export const getOneNews = async (id) =>{
  try{
    const response = await fetch(`http://localhost:3000/api/news/${id}`);
    const data = await response.json()
    return data
  } catch(error){
    console.error('Error');
  }
}

export const deleteNews = async (id) => {
  await fetch(`http://localhost:3000/api/news/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?"); 
        if (confirmDelete){
           alert('Eliminado correctamente');
        }
      }});
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
