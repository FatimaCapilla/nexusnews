// Método GET
const url='http://localhost:3000/api/news'

export const getNews = async () => {  
    try {  
      const response = await fetch(url); 
      const data = await response.json(); 
      return data 
    } catch (error) { 
      console.error('Error fetching news:', error); 
    }
  };
