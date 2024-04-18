import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LayoutPrivate = () => {
    const navigate = useNavigate();
    const { userEmail, loggedIn, userId, setLoggedIn, setUserRole, setUserId } = useAuth();

    const handleLogOut = () => {

        localStorage.removeItem('token');
        setLoggedIn(false);
        setUserId(null);
        setUserRole(null);
        navigate('/');
    }
    
    if (loggedIn) {
        return (
            <>
                <div className="flex gap-10 items-center justify-end mb-5">
                    <h3>{userEmail}</h3>
                    <button onClick={handleLogOut} className="mr-10 inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] uppercase tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Logout</button>
                </div>
                <Outlet />
            </>
        )
    }
    else {
        return < Navigate to="/" />
    }
};

export default LayoutPrivate;