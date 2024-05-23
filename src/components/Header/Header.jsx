import './Header.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
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