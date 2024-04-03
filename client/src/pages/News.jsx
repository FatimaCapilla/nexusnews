// const News = () => {
//   return (
//     <>
//       <div>HOLA</div>
//     </>
//   )
// }

// export default News;

import { useEffect, useState } from 'react';
import { getOneNews } from '../services/newsServices';
import { useParams } from "react-router";
//import './News.css'


const News = () => {

  const { id } = useParams();
    const [ data, setData ] = useState(null);

      
      useEffect(() => {
        const fetchData = async () =>{
            const response = await getOneNews(id); 
             setData(response); 
        }
        fetchData()
    }, [id]);

    return (
      <div>
          {data ? (
           <article className='news' key={data.id}>
           <h1 className='title'>{data.title}</h1><br />
           <div className='image'><img src={data.image} alt='img-news' className='image'/></div><br />
           <h3 className='body'><span className='body'>{data.body}</span></h3>
           <div className='date'><span className='strong'></span>{data.date}
             </div>
           <p className='descrip'>{data.description}</p>
         </article>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
    )
  }
  
  export default News;