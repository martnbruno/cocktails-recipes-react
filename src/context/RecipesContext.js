// 13. Crear RecipesContext
// 14. Crear el RecipesContext. Crear RecipesProvider.
// 15. Crear state recipes, setRecipes que comienza como arreglo vacio.
// 16. Crear state recipesearch, setRecipeSearch que comienza como un objeto con los keys ingredient y category y values de string.
// 17. Pasar setRecipeSearch a value del Provider.
// 18. Exportar RecipesProvider.
// 22. Importar useEffect y crear el llamado a la API que trae la receta del cocktail seleccionado con Axios. Se le pasa como dependencia recipesearch, category e ingredient para que cada vez que se realiza una busqueda el efecto se vuelva a ejecutar. La url recibe ingredient y category desestructurado de recipesearch.
// 23. Crear state okrequest,setOkRequest con valor inicial false para que la funcion de consulta de la API solo se ejecute si la validacion del Form fue correcta. Pasar setOkRequest como value del Context e incluirlo en Form como true una vez que pasa la validacion onSubmit.
// 27. Pasar recipes a value para poder pasarselo a RecipeList.

import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [recipesearch, setRecipeSearch] = useState({
    ingredient: "",
    category: "",
  });
  const [okrequest, setOkRequest] = useState(false);

  const { ingredient, category } = recipesearch;

  useEffect(() => {
    if (okrequest) {
      const getRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
        const response = await axios(url);
        setRecipes(response.data.drinks);
      };
      getRecipe();
    }
  }, [recipesearch, category, ingredient, okrequest]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipeSearch,
        setOkRequest,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
