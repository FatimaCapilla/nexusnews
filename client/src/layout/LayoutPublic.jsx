import Footer from '../components/footer/Footer.jsx'
import Nav from '../components/nav/Nav.jsx';
import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {
  return (
    <>
      <main>
        < Nav />
        < Outlet />
      </main>
      < Footer />
    </>
  )
}

export default LayoutPublic