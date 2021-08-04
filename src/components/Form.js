import { useContext, useState } from "react";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const {
    setIngredientRecipeSearch,
    setOkIngredientRequest,
    setDrinkNameRecipeSearch,
    setOkDrinkNameRequest,
  } = useContext(RecipesContext);

  const [drinknamesearch, setDrinkNameSearch] = useState({
    drinkname: "",
  });

  const [ingredientsearch, setIngredientSearch] = useState({
    ingredient: "",
  });

  const { ingredient } = ingredientsearch;

  const { drinkname } = drinknamesearch;

  const [ingredienterror, setIngredientError] = useState(false);

  const [drinknameerror, setDrinkNameError] = useState(false);

  const getIngredientValue = (e) => {
    setIngredientSearch({
      ...ingredientsearch,
      [e.target.name]: e.target.value,
    });
  };

  const getDrinkNameValue = (e) => {
    setDrinkNameSearch({
      ...drinknamesearch,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row col-12 m-1 ">
      <form
        className="col-12"
        onSubmit={(e) => {
          e.preventDefault();
          if (ingredient.trim() === "") {
            setIngredientError(true);
            return;
          }
          setIngredientError(false);
          setIngredientRecipeSearch(ingredientsearch);
          setOkIngredientRequest(true);
        }}
      >
        <fieldset className="text-center">
          <legend className="fs-4">
            Search Cocktail's Recipes by Ingredient or Name{" "}
          </legend>
        </fieldset>
        {ingredienterror ? (
          <p className="alert alert-danger text-center p-2 mt-4">
            Please add an ingredient.
          </p>
        ) : null}
        <div className="row mt-4 justify-content-center">
          <div className="col-md-6 col-xxl-5">
            <input
              type="text"
              name="ingredient"
              className="form-control p-2 mt-2"
              placeholder="Search by Ingredient"
              onChange={getIngredientValue}
            />
          </div>
          <div className="col-md-6 col-xxl-3">
            <input
              type="submit"
              className="btn btn-block btn-danger w-100 p-2 align-self-center mt-2"
              value="Search Recipe"
            />
          </div>
        </div>
      </form>

      <form
        className="col-md-12"
        onSubmit={(e) => {
          e.preventDefault();
          if (drinkname.trim() === "") {
            setDrinkNameError(true);
            return;
          }
          setDrinkNameError(false);
          setDrinkNameRecipeSearch(drinknamesearch);
          setOkDrinkNameRequest(true);
        }}
      >
        {drinknameerror ? (
          <p className="alert alert-danger text-center p-2 mt-4 w-100">
            Please add a name.
          </p>
        ) : null}

        <div className="row mt-4 justify-content-center">
          <div className="col-md-6 col-xxl-5">
            <input
              type="text"
              name="drinkname"
              className="form-control p-2 mt-2"
              placeholder="Search by Name"
              onChange={getDrinkNameValue}
            />
          </div>
          <div className="col-md-6 col-xxl-3">
            <input
              type="submit"
              className="btn btn-block btn-danger w-100 p-2 mt-2  align-self-center"
              value="Search Recipe"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
