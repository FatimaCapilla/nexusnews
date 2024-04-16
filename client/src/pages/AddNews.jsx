import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddNews = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://localhost:3000/api/news', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                Swal.fire({
                    title: 'Registro exitoso',
                    text: '¡Tu noticia ha sido creada!',
                    icon: 'success',
                });
                reset(); // Resetear los campos del formulario
                return <Navigate to="/news" />
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al intentar añadir tu noticia. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar añadir tu noticia. Por favor, inténtalo de nuevo más tarde.',
                icon: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-sans text-gray-900">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Login">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#1F1E1E] shadow-md overflow-hidden sm:rounded-lg rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-8">
                            <center>
                                <span className="text-2xl text-[#EEF0E5] font-semibold">Añadir noticia</span>
                            </center>
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="title">Título</label>
                            <input
                                id="title"
                                type='text'
                                name='title'
                                placeholder='Título'
                                {...register('title', { required: 'El título es requerido', maxLength: { value: 200, message: 'El título debe tener menos de 200 caracteres' } })}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="body">Noticia</label>
                            <input
                                id="body"
                                type='text'
                                name='body'
                                placeholder='Noticia'
                                {...register('body', { required: 'El cuerpo de la noticia es requerido', maxLength: { value: 1000, message: 'El cuerpo de la noticia debe tener menos de 1000 caracteres' } })}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                            />
                            {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="image">URL de la imagen</label>
                            <input
                                id="image"
                                type='text'
                                name='image'
                                placeholder='URL de la imagen'
                                {...register('image', { required: 'La URL de la imagen es requerida', pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: 'Debe ser una URL válida' } })}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium text-[#EEF0E5] text-sm" htmlFor="date">Fecha</label>
                            <input
                                id="date"
                                type='date'
                                name='date'
                                placeholder='Fecha'
                                {...register('date', { required: 'La fecha es requerida' })}
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] bg-[#EEF0E5]"
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link to={'/gallery'} className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Cancelar</Link>
                            <button type="submit" className="ms-4 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" disabled={isLoading}>Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNews;
