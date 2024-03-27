import '../nav/Nav.css'
import logo from '../../assets/logo-nexus-news.png';



const Nav = () => {
  return (
    <nav>
    <div className='nav'>
        <div className='logo-container'>
        <img src={logo} alt="Nexus News logo" className='logo' />
        </div>
    </div>
    </nav>
  )
}

export default Nav;