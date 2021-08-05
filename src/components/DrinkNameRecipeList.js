import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const DrinkNameRecipeList = () => {
  const { drinknamerecipes, error } = useContext(RecipesContext);

  if (error || !Array.isArray(drinknamerecipes)) {
    return (
      <p className="alert alert-danger text-center p-2 m-auto col-sm-10 col-md-10 col-xxl-8">
        Oops! We couldn't find the chosen name. Please try another one.
      </p>
    );
  }
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

export default DrinkNameRecipeList;
