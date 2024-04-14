const url = 'http://www.localhost:3000/api/news';

// Función para obtener las noticias
export const getNews = async () => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error al obtener las noticias');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
