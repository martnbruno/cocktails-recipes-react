import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const IngredientRecipeList = () => {
  const { ingredientrecipes, error } = useContext(RecipesContext);

  if (error || !Array.isArray(ingredientrecipes)) {
    return (
      <p className="alert alert-danger text-center p-2 mb-4 m-auto col-sm-10 col-md-10 col-xxl-8">
        Oops! We couldn't find the chosen ingredient. Please try another one.
      </p>
    );
  }

  return (
    <div className="row mt-5">
      {ingredientrecipes.map((ingredientrecipe) => (
        <Recipe
          key={ingredientrecipe.idDrink}
          ingredientrecipe={ingredientrecipe}
        />
      ))}
    </div>
  );
};

export default IngredientRecipeList;
