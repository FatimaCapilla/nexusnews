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
      <div className="header">
        <h3>Tecnología - Últimas noticias</h3>
        <button>Añadir noticia</button>
      </div>

      <div className="gallery">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <img src={item.image} />
            <p>{item.date}</p>
            <p>{item.user_id}</p>
          </div>
        ))}
      </div>

      </>
    )
  }
  
  export default GalleryNews;