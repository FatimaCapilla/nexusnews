import  { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddNews = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token'); // Obtener el token del localStorage
            
          // Verificar si el token está presente
          if (!token) {
              throw new Error('No se encontró un token de autenticación');
          }
            const response = await axios.post('http://localhost:3000/api/news', {
                title,
                body,
                image,
                date,
            });
            if (response.status === 201) {
                Swal.fire({
                    title: 'Registro exitoso',
                    text: '¡Tu noticia ha sido creada!',
                    icon: 'success',
                });
                setTitle('');
                setBody('');
                setImage('');
                setDate('');
            } else {
                throw new Error('Error al intentar añadir la noticia');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar añadir tu noticia. Por favor, inténtalo de nuevo más tarde.',
                icon: 'error',
            });
        }
    };
  
    return (
      <div className="font-sans text-gray-900">
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
          <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
              <form onSubmit={handleSubmit}>
                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Añadir noticia</span>
                            </center>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="title"></label>
                            <input
                                id="title"
                                type='text'
                                name='title'
                                placeholder='Títular'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" 
                                required />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="body"></label>
                            <input
                                id="body"
                                type='text'
                                name='body'
                                placeholder='Noticia'
                                value={body}
                                required
                                onChange={(e) => setBody(e.target.value)}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="image"></label>
                            <input
                                id="image"
                                type='text'
                                name='image'
                                placeholder='Url de la imagen'
                                value={image}
                                required
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="date"></label>
                            <input
                                id="date"
                                type='date'
                                name='date'
                                placeholder='Fecha'
                                value={date}
                                required
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]" />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link to={'/gallery'}
                                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Cancelar
                            </Link>                            
                            <button type="submit"
                            onClick={handleRegister}
                                className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Añadir
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNews;

