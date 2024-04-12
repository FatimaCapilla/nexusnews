// Método GET
const url='http://localhost:3008/api/news'

export const getNews = async () => {  
    try {  
      const response = await fetch(url); 
      const data = await response.json(); 
      return data 
    } catch (error) { 
      console.error('Error fetching news:', error); 
    }
  }


export const getOneNews = async (id) =>{
  try{
    const response = await fetch(`http://localhost:3008/api/news/${id}`);
    const data = await response.json()
    return data
  } catch(error){
    console.error('Error');
  }
}

export const deleteNews = async (id) => {
  await fetch(`http://localhost:3008/api/news/${id}`, {method:"DELETE"}
  ).then(response => {
      if (response.ok) {
        const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?"); 
        if (confirmDelete){
           alert('Eliminado correctamente');
        }
      }});
} 



