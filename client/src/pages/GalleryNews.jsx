import "../pages/GalleryNews.css";
import { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";

const GalleryNews = () => {
    const [news, setNews] = useState([]);
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getNews();
          console.log("Response from getNews():", response);
          if (response.success && Array.isArray(response.data)) {
            setNews(response.data);
          } else {
            console.error("Invalid data format received from getNews():", response);
          }
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
      fetchData();
    }, []);

    return (
      <>
      <div className="gallery-header">
        <h3 className="gallery-h3">Tecnología - Últimas noticias</h3>
        <button className="gallery-button">Añadir noticia</button>
      </div>

      <div className="gallery">
        {news.map((item, index) => (
          <div key={index} className="gallery-news-item">
              <img className="url-img" src={item.image} />
              <div className="gallery-news-details">
            <div className="title-arrow">
              <h4>{item.title}</h4>
              <img className="arrow" src="src\assets\Vector.png" />
            </div>
            <p className="date">{item.date}</p>
.          </div>
          </div>
        ))}
      </div>
      </>
    )
  }
 
  export default GalleryNews;
