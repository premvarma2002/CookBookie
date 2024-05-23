import './Header.scss';
import Logo from '../Home/Logo/Logo';
import Navbar from '../Home/Navbar/Navbar';
import BsSearch from './Search/Search';

const Header = ({ scrollToSearch }) => {
  return (
    <div className="header-nav">
      <Logo/>
      <Navbar/>
      <BsSearch onClick={scrollToSearch}/>
    </div>
  )
}

export default Header