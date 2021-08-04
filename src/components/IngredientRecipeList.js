import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const IngredientRecipeList = () => {
  const { ingredientrecipes } = useContext(RecipesContext);

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
