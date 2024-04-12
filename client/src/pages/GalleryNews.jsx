import "../pages/GalleryNews.css";
import { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";

const GalleryNews = ({ token }) => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) {
                    console.error('Token de autenticación no proporcionado');
                    return;
                }

                const response = await getNews(token);
                console.log("Data from getNews():", response);
                if (response && response.success && Array.isArray(response.data)) {
                    setNews(response.data);
                } else {
                    console.error("Data from getNews() is not in the expected format:", response);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <>
            <div className="gallery-header">
                <h3 className="gallery-h3">Tecnología - Últimas noticias</h3>
                <button className="gallery-button">Añadir noticia</button>
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
