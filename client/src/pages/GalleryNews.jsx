import { useAuth } from "../context/AuthContext";
import "./GalleryNews.css"
import { Link, useNavigate, useLoaderData } from 'react-router-dom';

const GalleryNews = () => {
  const navigate = useNavigate();
  const { setLoggedIn, loggedIn } = useAuth();
  const news = useLoaderData();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLoggedIn(false);
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
