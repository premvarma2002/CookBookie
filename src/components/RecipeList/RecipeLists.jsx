// import {useEffect,useState} from 'react'
// import {BsSearch} from 'react-icons/bs'
// import {fetchData} from "../../service";
// import './RecipeList.scss';

// function RecipeList(props) {
//     const [searchedTearm, setSearchedTearm] = useState('')
//     // eslint-disable-next-line no-unused-vars
//     const [query,setQuery] = useState('pasta')
//     const [data,setData] = useState('');

//    const searchrecipe = (searchQuery) => {
//     fetchData(searchQuery).then((response)=> {
//         setData(response)
//         props.setLoader(false)
//     })
//    }

//     useEffect(()=>{
//         fetchData(query).then((response)=> {
//             setData(response)
//             props.setLoader(false)
//         })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])
//   return (

//     <div className='container'>
//         <div className='heading-line'>
//             <strong>Search Recipes</strong>
//             <div className='input-wrapper' >
//                 <input 
//                     onChange={(e)=> setSearchedTearm(e.target.value)} 
//                     value={searchedTearm} 
//                     type="text" 
//                     placeholder='Search you recipe' />
//                 <button onClick={()=> (searchrecipe(searchedTearm),props.setLoader(true))}><BsSearch /></button>
//             </div> 
//         </div>
//         <div className='flexbox'>
//             {
//                 data && data.hits.map((item,index)=> (
//                     <div key={index} className='flexItem'>
//                         <div className='img-wrapper'>
//                             <img src={item.recipe.image} alt={item.recipe.label} />
//                         </div>
//                         <p>{item.recipe.label}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default RecipeList;

const RecipeLists = () => {
  return (
    <div>RecipeList</div>
  )
}

export default RecipeLists
