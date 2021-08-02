// 2. Importar Header.
// 4. Importar Form.
// 7. Importar CategoriesProvider y encerrar el codigo en el.
// 19. Importar RecipesProvider y encerrar el codigo en el.
// 26.Importar RecipeList.
// 33. Importar ModalProvider y encerrar el codigo en el.

import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <ModalProvider>
      <RecipesProvider>
        <CategoriesProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeList />
          </div>
        </CategoriesProvider>
      </RecipesProvider>
    </ModalProvider>
  );
}

export default App;
