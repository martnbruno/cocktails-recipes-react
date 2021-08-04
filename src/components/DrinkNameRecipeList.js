import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const IngredientRecipeList = () => {
  const { drinknamerecipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {drinknamerecipes.map((drinknamerecipe) => (
        <Recipe
          key={drinknamerecipe.idDrink}
          ingredientrecipe={drinknamerecipe}
        />
      ))}
    </div>
  );
};

export default IngredientRecipeList;
