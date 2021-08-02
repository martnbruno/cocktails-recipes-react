// 3. Crear Form
// 7. Importar useContext. Recibe CategoriesContext como argumento. Traer el value categories.
// 9. Pasar respuesta de la API (categories) al Form.
// 10. Iterar sobre el arreglo categories traido de la API y retornar un option por cada una en el select.
// 11. Crear state search, setSearch que inicia como un objeto con name y category como strings, y que almacena la busqueda realizada en los input.
// 12. Crear funcion getInputValues que onChange de los input actualiza setSearch con los valores seleccionados.
// 20. Importar RecipesContext. usar useContext que recibe RecipesContext como argumento. Traer el value setRecipeSearch.
// 21. Pasar la funcion setRecipeSearch al form para que se ejecute onSubmit. Es importante que hay que pasarle search como argumento porque sino no sabe el nombre y la categoria que tiene que buscar en la API.
// 24. Importar setOkRequest desde RecipesContext e incluirlo en Form como true una vez que pasa la validacion onSubmit.

import { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);

  const { setRecipeSearch, setOkRequest } = useContext(RecipesContext);

  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });

  const { ingredient, category } = search;

  const [error, setError] = useState(false);

  const getInputValues = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        if (ingredient.trim() === "" || category.trim() === "") {
          setError(true);
          return;
        }
        setError(false);
        setRecipeSearch(search);
        setOkRequest(true);
      }}
    >
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Both fields are required.
        </p>
      ) : null}
      <fieldset className="text-center">
        <legend>Search Cocktail's Recipes by Category and Ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="ingredient"
            className="form-control p-2 m-1"
            placeholder="Search by Ingredient"
            onChange={getInputValues}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control p-2 m-1"
            onChange={getInputValues}
          >
            <option value="">Search by Category</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-danger w-100 p-2 m-1 align-self-center"
            value="Search Recipe"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
