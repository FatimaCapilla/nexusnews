import { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";
import "./GalleryNews.css"
import { useNavigate } from 'react-router-dom';

const GalleryNews = () => {
  const [news, setNews] = useState([]);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log("Data from getNews():", response);
        if (response && Array.isArray(response)) {
          setNews(response);
        } else {
          console.error("Data from getNews() is not in the expected format:", response);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const userRole = localStorage.getItem('role');
    setUserRole(userRole);

    fetchNews();
  }, []);

  return (
    <>
      <div className="gallery-header">
        <h3 className="gallery-h3">Tecnología - Últimas noticias</h3>
        {userRole === 'admin' && (
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Botón de administrador 1</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Botón de administrador 2</button>
          </div>
        )}
        <button onClick={() => navigate("/add")} className="gallery-button">Añadir noticia</button>
      </div>

      <div className="gallery">
        {news.map((item, index) => (
          <div key={index} className="gallery-news-item">
            <img className="url-img" src={item.image} alt="Noticia" />
            <div className="gallery-news-details">
              <div className="title-arrow">
                <h4>{item.title}</h4>
                <img className="arrow" src="src\assets\Vector.png" alt="Flecha" />
              </div>
              <p className="date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryNews;
