import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";
import Header from "./components/Header";
import Form from "./components/Form";
import IngredientRecipeList from "./components/IngredientRecipeList";
import DrinkNameRecipeList from "./components/DrinkNameRecipeList";

function App() {
  return (
    <ModalProvider>
      <RecipesProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <IngredientRecipeList />
          <DrinkNameRecipeList />
        </div>
      </RecipesProvider>
    </ModalProvider>
  );
}

export default App;
