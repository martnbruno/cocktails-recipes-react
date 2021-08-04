import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [recipeid, setRecipeId] = useState(null);
  const [cocktailrecipe, setCocktailRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!recipeid) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeid}`;
      const response = await axios(url);
      setCocktailRecipe(response.data.drinks[0]);
    };
    getRecipe();
  }, [recipeid]);
  return (
    <ModalContext.Provider
      value={{
        setRecipeId,
        cocktailrecipe,
        setCocktailRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
