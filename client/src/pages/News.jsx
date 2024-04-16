import { useEffect, useState } from 'react';
import { getOneNews, deleteNews } from '../services/newsServices';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "../pages/News.css"

const News = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOneNews(id);
      setData(response);
    }
    const userRole = localStorage.getItem('role');
    setUserRole(userRole);
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

  return (
    <div className='news-model'>
      <div className="flex items-center justify-around">
        {userRole === 'admin' && (
          <button className="inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={() => navigate(`/news/${id}/update`)}>Editar</button>
        )}
        {userRole === 'admin' && (
          <button className="inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={handleDelete}>Eliminar</button>
        )}
      </div>
      {data ? (
        <article className='news' key={data.id}>
          <h1 className='title-news'>{data.title}</h1>
          <div className='image-news'><img src={data.image} alt='img-news' className='image' /></div>
          <div className='date'><span className='strong'></span>{data.date}</div>
          <h3 className='body-news'><span className='body'>{data.body}</span></h3>
        </article>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default News;

