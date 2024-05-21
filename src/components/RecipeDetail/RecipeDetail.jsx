// import  { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";
// import { GlobalContext } from "./hooks/GlobalState";
// import AppBarWithBack from "./AppBarWithBack";
// import "./MealDetail.scss";

// const RecipeDetail = ({ match }) => {
//   const [meal, setMeal] = useState({});
//   const { meals, addMealToFavourite, removeMealFromFavourite } = useContext(GlobalContext);

//   let meal_id = match.params.id;

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_id}`)
//       .then((response) => response.json())
//       .then((data) => setMeal(data.meals[0]))
//       .catch((error) => console.log(error));
//   }, [meal_id]);

//   let idMeal = meal.idMeal;
//   const selected = meals.find((el) => el.idMeal === meal_id);
//   const isFavorited = selected ? true : false;

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: {
//           scale: 0.8,
//           opacity: 0,
//         },
//         visible: {
//           scale: 1,
//           opacity: 1,
//           transition: {
//             delay: 0.4,
//           },
//         },
//       }}
//       className="meal-detail-container"
//     >
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{meal.strMeal}</title>
//       </Helmet>
//       <AppBarWithBack />

//       {isFavorited ? (
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="favorite-btn"
//           onClick={() => removeMealFromFavourite(idMeal)}
//         >
//           <h1 className="material-icons">favorite</h1>
//         </motion.button>
//       ) : (
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="favorite-btn"
//           onClick={() => addMealToFavourite(meal)}
//         >
//           <h1 className="material-icons">favorite_border</h1>
//         </motion.button>
//       )}

//       <div className="meal-detail-content">
//         <img src={meal.strMealThumb} alt="meal thumb" loading="lazy" />
//         <div className="content">
//           <h1 className="title">{meal.strMeal}</h1>
//           <div className="tags">
//             <Link to={`/area/${meal.strArea}`}>
//               <h2 className="area-tag">{meal.strArea}</h2>
//             </Link>
//             <Link to={`/category/${meal.strCategory}`}>
//               <h3 className="category-tag">{meal.strCategory}</h3>
//             </Link>
//           </div>

//           <div className="ingredients">
//             <table className="ingredients-table">
//               <thead>
//                 <tr>
//                   <th>Ingredient</th>
//                   <th>Meausure</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[...Array(16).keys()].map((i) => (
//                   <tr key={i}>
//                     <td>{meal[`strIngredient${i + 1}`]}</td>
//                     <td>{meal[`strMeasure${i + 1}`]}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <p className="instructions">{meal.strInstructions}</p>
//         </div>
//         <div className="player-wrapper">
//           <ReactPlayer
//             url={meal.strYoutube}
//             className="react-player"
//             width="100%"
//             height="100%"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default RecipeDetail;
