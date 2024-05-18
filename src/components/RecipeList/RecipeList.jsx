import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, selectRecipe } from '../../store/recipesSlice';
import styles from './RecipeList.module.scss';

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  const handleRecipeClick = (recipe) => {
    dispatch(selectRecipe(recipe));
  };

  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} onClick={() => handleRecipeClick(recipe)} className={styles.recipeItem}>
          {recipe.strMeal}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
