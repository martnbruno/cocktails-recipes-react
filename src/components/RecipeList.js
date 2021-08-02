// 25. Crear componente RecipeList.
// 28. Importar useContext, importar RecipesContext y traer recipes de RecipesContext con useContext.
// 29. Mapear las recipes y retornar el componente Recipe. Pasarle el id como key y cada receta como recipe.
// 31. Importar Recipe y retornarlo en el map.

import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

const RecipeList = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
