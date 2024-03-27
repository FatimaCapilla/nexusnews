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

      </div>

      </>
    )
  }
  
  export default GalleryNews;