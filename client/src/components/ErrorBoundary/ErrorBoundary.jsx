import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  let error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className='m-auto flex-column'>
      <h2 className='text-center text-5xl'>Error 404</h2>
      <h3 className='text-center mt-8 mb-8'>Ups, creo que te has perdido.</h3>
      <button onClick={() => navigate(`/`)} className="px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Ir a la página principal</button>
    </div>
  )
}

export default ErrorBoundary;