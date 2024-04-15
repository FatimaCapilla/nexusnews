import { useEffect, useState } from 'react';
import { getOneNews, deleteNews } from '../services/newsServices';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
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
    try {
      await deleteNews(id);
      navigate("/gallery");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='news-model'>
      <div className="buttons-container">
      {userRole === 'admin' && (
      <button className="update-button" onClick={()=> navigate("/update")}>Actualizar</button>
      )}
      {userRole === 'admin' && (
      <button className="delete-button" onClick={handleDelete}>Eliminar</button>
      )}
   </div>
      {data ? (
        <article className='news' key={data.id}>
          <h1 className='title-news'>{data.title}</h1><br />
          <div className='image-news'><img src={data.image} alt='img-news' className='image' /></div><br />
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
