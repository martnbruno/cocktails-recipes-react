import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  // ingredient state
  const [ingredientrecipes, setIngredientRecipes] = useState([]);
  const [ingredientrecipesearch, setIngredientRecipeSearch] = useState({
    ingredient: "",
  });
  const [okingredientrequest, setOkIngredientRequest] = useState(false);

  const { ingredient } = ingredientrecipesearch;

  // drinkname state
  const [drinknamerecipes, setDrinkNameRecipes] = useState([]);
  const [drinknamerecipesearch, setDrinkNameRecipeSearch] = useState({
    drinkname: "",
  });
  const [okdrinknamerequest, setOkDrinkNameRequest] = useState(false);

  const { drinkname } = drinknamerecipesearch;

  // ingredient API call
  useEffect(() => {
    if (okingredientrequest) {
      const getIngredientRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await axios(url);
        setDrinkNameRecipes([]);
        if (Object.keys(ingredientrecipes).length === 0) return null;
        setIngredientRecipes(response.data.drinks);
      };
      getIngredientRecipe();
    }
  }, [
    ingredientrecipesearch,
    ingredient,
    okingredientrequest,
    ingredientrecipes,
  ]);

  // drinkname API call
  useEffect(() => {
    if (okdrinknamerequest) {
      const getDrinkNameRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkname}`;
        const response = await axios(url);
        setIngredientRecipes([]);
        if (Object.keys(drinknamerecipes).length === 0) return null;
        setDrinkNameRecipes(response.data.drinks);
      };
      getDrinkNameRecipe();
    }
  }, [drinknamerecipesearch, drinkname, okdrinknamerequest, drinknamerecipes]);

  return (
    <RecipesContext.Provider
      value={{
        drinknamerecipes,
        setDrinkNameRecipeSearch,
        setOkDrinkNameRequest,
        ingredientrecipes,
        setIngredientRecipeSearch,
        setOkIngredientRequest,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
