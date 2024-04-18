import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOneNews, updateNews } from '../services/newsServices';
import Swal from 'sweetalert2';

const UpdateNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState({
    title: '',
    body: '',
    image: '',
    date: '',
  });
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const newsData = await getOneNews(id);
        if (userId != newsData.user_id){
          return navigate(`/news/${id}`);
        } else {
          setNews(newsData);
        }

      } catch (error) {
        console.error('Error fetching news:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cargar la noticia para editar.',
          icon: 'error',
        });
      }
    };

    fetchNewsById();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews(prevNews => ({
      ...prevNews,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateNews(id, news);
      if (result.success) {
        Swal.fire({
          title: 'Registro exitoso',
          text: '¡Tu noticia ha sido actualizada!',
          icon: 'success',
        });
        navigate(`/news/${id}`);
      } else {
        Swal.fire({
          title: 'Error',
          text: result.message,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error updating news:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al actualizar la noticia.',
        icon: 'error',
      });
    }
  };

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
                value={news.date.slice(0,10)}
                required
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
            </div>
            <div className="flex items-center justify-end mt-4">
              <Link to={`/news/${id}`}
                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                Cancelar
              </Link>
              <button
                type="submit"
                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};


export default UpdateNews;

