import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const LayoutPrivate = () => {

    const { loggedIn } = useAuth();
    
    return (
        <>
            {loggedIn ? <Outlet /> : <Navigate to="/" />}
        </>
    )
};

export default LayoutPrivate;