// 30. Crear componente Recipe que recibe de RecipeList una receta al mapear recipes.
// 34. Importar ModalContext. Usar useContext que recibe ModalContext como argumento. Traer el value setRecipeId.
// 35. Pasar setRecipeId para que onClick del Button See Recipe, se actualice el state de ModalContext con el id del cocktail seleccionado.
// 38. npm i @material-ui/core. Crear Modal con Material UI y configurarlo.
// 39. En el button agregar en onClick que se ejecute handleOpen.
// 40. Debajo de button agregar el componente Modal con un div con atributos style={modalStyle} className={classes.paper}.
// 41. Modal tambien recibe atributos open={open} onClose={() => {handleClose() setRecipeId(null)}}. Es importante que tambien reciba setRecipeId(null) porque al cerrar el Modal el recipeid no tiene que seguir quedandose con el id sino que tiene que volver a null para que se pueda seleccionar otro id con See Recipe. Es importante limpiar el state al terminar de usarlo.
// 43. Desestructurar cocktailrecipe en el useContext.
// 44. Pasar la infomracion necesaria dentro del div del modal para que se muestre dentro de el.
// 46. Importar setCocktailRecipe de ModalContext y pasarlo debajo del onClose del Modal con su valor inicial, es decir un objeto vacio. Esto para evitar que cuando se cierre un modal y se abra otro, este visible por unos segundos la informacion anterior.
// 47. Agregar ingredientes y cantidades al Modal. Por la estructura de la API usar for.

import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Crear Modal Material UI
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  scroll: { maxHeight: "500px", overflowY: "scroll", overflowX: "none" },
}));

const Recipe = ({ recipe }) => {
  const { setRecipeId, cocktailrecipe, setCocktailRecipe } =
    useContext(ModalContext);

  // Configuracion Modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showIngredients = (ingredient) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (ingredient[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {ingredient[`strIngredient${i}`]} {ingredient[`strMesure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center">
        <h4 className="card-header text-wrap p-3">{recipe.strDrink}</h4>
        <img
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-danger w-100 p-2"
            onClick={() => {
              setRecipeId(recipe.idDrink);
              handleOpen();
            }}
          >
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setRecipeId(null);
              setCocktailRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <div className={classes.scroll}>
                <h2>{cocktailrecipe.strDrink}</h2>
                <h3 className="mt-4">Instructions</h3>
                <p>{cocktailrecipe.strInstructions}</p>
                <img
                  src={cocktailrecipe.strDrinkThumb}
                  alt={cocktailrecipe.strDrinkThumb}
                  className="img-fluid my-4"
                />
                <h3>Ingredients & Quantities</h3>
                <ul>{showIngredients(cocktailrecipe)}</ul>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
