import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import './Search.scss';
import { BsPerson } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='search'>
      <div className='icons'>
      <HiMiniMagnifyingGlass className='icon' size={30}/>
      <BsPerson className='icon' size={30} />
      </div>
    </div>
  )
}

export default Search