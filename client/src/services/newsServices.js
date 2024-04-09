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
  };


  // Método PUT
export const updateNews = async (id, newData) => { 
  try {
    const response = await fetch(`url/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) { 
      throw new Error('Error updating new'); 
    }

    return response.json(); 
  } catch (error) {
    console.error('Error updating new:', error);
    throw error;
  }
};