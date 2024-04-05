import "../pages/GalleryNews.css";
import React, { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";
import { useNavigate } from "react-router-dom";

const GalleryNews = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getNews();
        setNews(data);
      };
      fetchData();
    }, []);

    const navigate = useNavigate();

    return (
      <>
      <div className="gallery-header">
        <h3 className="gallery-h3">Tecnología - Últimas noticias</h3>
        <button onClick={() => navigate("/add")} className="gallery-button">Añadir noticia</button>
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
          </div>
          </div>
        ))}
      </div>

      </>
    )
  }
  
  export default GalleryNews;