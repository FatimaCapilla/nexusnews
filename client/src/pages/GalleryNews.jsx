import { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";
import "./GalleryNews.css"
import { Link, useNavigate, Navigate } from 'react-router-dom';

const GalleryNews = () => {
  const [news, setNews] = useState([]);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

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
  }, [token]);

  const handleLogOut = () => {
    localStorage.setItem('token', "");
  }

  return (
    <>
      <div className="flex items-center justify-end mt-4">
        <button onClick={() => { handleLogOut(); navigate('/'); }} className="mr-10 ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Log out</button>
      </div>
      <div className="gallery-header">
        <h3 className="gallery-h3">Tecnología - Últimas noticias</h3>
          <div className="flex space-x-4">
            <button onClick={() => navigate("/news/add")} className="gallery-button">Añadir noticia</button>
          </div>
      </div>

      <div className="gallery">
        {news.map((item, index) => (
          <div key={index} className="gallery-news-item">
            <img className="url-img" src={item.image} alt="Noticia" />
            <div className="gallery-news-details">
              <div className="title-arrow">
                <h4>{item.title}</h4>
                <Link to={`/news/${item.id}`}>
                  <img className="arrow" src="src\assets\Vector.png" alt="Flecha" />
                </Link>
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
