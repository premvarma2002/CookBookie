// import  { useState, useEffect } from "react";
// import RecipeResult from "../RecipeResult/RecipeResult";
// import './RecipeForYou.scss';

// const RecipeForYou = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
//       .then((response) => response.json())
//       .then((data) => setMeals(data.meals))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="for-you-container">
//       {meals.map((meal, i) => (
//         <RecipeResult key={i} meal={meal} />
//       ))}
//     </div>
//   );
// };

// export default RecipeForYou;
