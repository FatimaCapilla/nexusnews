import { useEffect, useState } from 'react';
import { getOneNews, deleteNews } from '../services/newsServices';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "../pages/News.css"
import { useAuth } from '../context/AuthContext';

const News = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { userRole, userId } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOneNews(id);
      setData(response);
    }
    fetchData()
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la noticia?");

    if (confirmDelete) {
      try {
        const response = await deleteNews(id);
        if (response.status === 200) {
          alert('Eliminado correctamente');
        }
        navigate("/news")
      }
      catch (error) {
        console.error(error);
      }
    }
  }

  if (data) {
    return (
      <div className='news-model'>
        <div className="flex items-center justify-center gap-20">
          {userRole === 'admin' && userId === data.user_id && (
            <button className="update-button px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={() => navigate(`/news/${id}/update`)}>Editar</button>
          )}
          {userRole === 'admin' && (
            <button className="delete-button px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={handleDelete}>Eliminar</button>
          )}
        </div>
        <article className='news' key={data.id}>
          <h1 className='title-news'>{data.title}</h1>
          <div className='image-news'><img src={data.image} alt='img-news' className='image' /></div>
          <div className='date'><span className='strong'></span>{data.date.slice(0, 10)}</div>
          <h3 className='body-news'><span className='body'>{data.body}</span></h3>
        </article>
        
      </div>
    )
  }
  else return (
    <p>Loading data...</p>
  )
}

export default News;

