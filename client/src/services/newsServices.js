// Método GET
export const getNews = async () => {  
    try {  
      const response = await fetch('http://localhost:3000/news'); 
      const data = await response.json(); 
      return data 
    } catch (error) { 
      console.error('Error fetching news:', error); 
    }
  };