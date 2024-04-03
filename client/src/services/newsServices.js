// Método GET
const url='http://localhost:3000/news'

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
    const response = await fetch(`http://localhost:3000/news/${id}`);
    const data = await response.json()
    return data
  } catch(error){
    console.error('Error');
  }
}

// export const updateNews = async (id, newData) =>{
//   try { 
//   const response = await fetch(`http://localhost:3000/news/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newData)
//   });

//   if (!response.ok) {
//     throw new Error('Error al modificar la noticia');
//   }
//   return response.json();
// }catch (error){ 
//   alert('Error');
//   throw error;
//   }
// };
  
// export const deleteNews = async (id) => {
//   await fetch(`http://localhost:3000/news/${id}`, {method:"DELETE"}
//   ).then(response => {
//       if (response.ok) {
//         const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?"); 
//         if (confirmDelete){
//            alert('Eliminado correctamente');
//         }
//       }});
// } 


