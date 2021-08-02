// 32. Crear ModalContext. Crear un state recipeid, setRecipeID, que comienza como null. Exportar ModalProvider.
// 36. Crear useEffect con una funcion que consulte la API cuando el usuario clickea en See Recipe. Su dependencia sera el recipeid porque cuando cambia la receta elegida, se vuelve a producir el efecto y trae una nueva receta. Dentro de la funcion de consulta recordar evaluar primero si hay o no recipeid para que retorne en caso que no haya receta.
// 37. Crear state cocktailrecipe, setCocktailRecipe que inicia como un objeto vacio y en donde se almacenara la data traida por la API(ingredientes, receta) en relacion al cocktail elegido. Actualizar el state con la response de la API.
// 42. Pasar cocktailrecipe al value y pasarla al Modal via Recipe.
// 45. Pasar setCocktailRecipe a value para poder utilizarlo en Recipe.

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
