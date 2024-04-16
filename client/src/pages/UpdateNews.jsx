
// Importar las dependencias necesarias
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById, updateNews } from '../services/newsServices';

// Definir el componente
const UpdateNews = () => {
  // Estado para almacenar la noticia
  const [news, setNews] = useState({
    title: '',
    body: '',
    image: '',
    date: ''
  });

  // Obtener el ID de la URL usando useParams
  const { id } = useParams();

  // Efecto para obtener la noticia por su ID cuando el componente se monta o el ID cambia
  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        // Llamar a getById con el ID obtenido de la URL
        const newsData = await getById(id);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNewsById();
  }, [id]); // Ejecutar efecto cuando el ID cambie

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    try {
      // Llamar a updateNews con el ID y los datos actualizados de la noticia
      const updatedNews = await updateNews(id, news);
      console.log('Noticia actualizada:', updatedNews);
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  // Función para manejar cambios en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews((prevNews) => ({
      ...prevNews,
      [name]: value
    }));
  };

  // Renderizar el formulario
  return (
    <div className="font-sans text-gray-900">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
          <form onSubmit={handleSubmit}>
            <div className="py-8">
              <center>
                <span className="text-2xl text-[#EEF0E5] font-semibold">Editar noticia</span>
              </center>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="title">Título</label>
              <input
                id="title"
                type='text'
                name='title'
                placeholder='Título'
                value={news.title}
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                required />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="body">Noticia</label>
              <input
                id="body"
                type='text'
                name='body'
                placeholder='Noticia'
                value={news.body}
                required
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="image">URL de la imagen</label>
              <input
                id="image"
                type='text'
                name='image'
                placeholder='URL de la imagen'
                value={news.image}
                required
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="date">Fecha</label>
              <input
                id="date"
                type='date'
                name='date'
                placeholder='Fecha'
                value={news.date}
                required
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exportar el componente
export default UpdateNews;
