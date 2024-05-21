import { useEffect, useState } from "react";
import SearchRecipe from "../../components/SearchRecipe/SearchRecipe";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./RecipeLists.scss";

const RecipeLists = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("chicken");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const json = await response.json();
        setRecipe(json.meals);
        console.log(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data!!!");
        setLoading(false);
      }
    };
    timeoutId = setTimeout(fetchData, 2000);

    return () => clearTimeout(timeoutId);
  }, [search]);

  if (error) return <div className="error">{error}</div>;
  if (loading)
    return (
      <div className="loading-bar">
        <PacmanLoader
          className="loader"
          color="#36d7b7"
          cssOverride={{}}
          loading
          size={25}
          speedMultiplier={1}
        />
      </div>
    );

  return (
    <main>
      <SearchRecipe handleSearch={handleSearch} />
      <div className="recipecard-api">
        {recipe?.length > 0 ? (
          recipe.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <div className="not-found">No results found</div>
        )}
      </div>
    </main>
  );
};

export default RecipeLists;
