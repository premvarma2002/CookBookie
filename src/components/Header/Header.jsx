import './Header.scss';
import Logo from '../Home/Logo/Logo';
import Navbar from '../Home/Navbar/Navbar';
import Search from './Search/Search';

const Header = () => {
  return (
    <div className="header">
      <Logo/>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Header