import "../pages/GalleryNews.css";
import React, { useState, useEffect } from 'react';
import { getNews } from "../services/newsServices";

const GalleryNews = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getNews();
        setNews(data);
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
            <img src={item.image} />
            <div className="gallery-news-details">
            <h4>{item.title}</h4>
            <img className="arrow" src={} />
            <p>{item.date}</p>
          </div>
          </div>
        ))}
      </div>

      </>
    )
  }
  
  export default GalleryNews;