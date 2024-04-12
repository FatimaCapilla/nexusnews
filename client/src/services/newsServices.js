const url = 'http://localhost:3000/api/news';

let authToken = ''; // Variable para almacenar el token

// Función para establecer el token
export const setAuthToken = (token) => {
  authToken = token;
};

// Función para obtener las noticias
export const getNews = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${authToken}` // Usar el token almacenado
      }
      
    });

    console.log(response);
      console.log(authToken)
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

