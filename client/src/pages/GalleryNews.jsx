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
        <button onClick={() => { handleLogOut(); navigate('/'); }} className="mr-10 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Logout</button>
      </div>
      <div className="m-10 flex items-center justify-between">
        <h3 className="text-3xl">Tecnología - Últimas noticias</h3>
        <button onClick={() => navigate("/news/add")} className=" inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 uppercase">Añadir noticia</button>
      </div>

      <div className="flex-column">
        {news.map((item, index) => (
          <div key={index} className="gallery-news-item justify-between">
            <div className="flex">
              <img className="url-img" src={item.image} alt="Noticia" />
              <div className="flex-column ml-5 mr-5">
                <h4 className="text-xl uppercase">{item.title}</h4>
                <p className="date">{item.date}</p>
              </div>
            </div>
            <Link to={`/news/${item.id}`}>
              <img className="arrow" src="src\assets\Vector.png" alt="Flecha" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryNews;
