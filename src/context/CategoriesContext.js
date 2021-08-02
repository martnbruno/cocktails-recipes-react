// 5. Crear CategoriesContext
// 6. Crear el CategoriesContext. Crear CategoriesProvider. Crear state categories, setCategories que comienza como arreglo vacio. Exportar CategoriesProvider.
// 8.Importar useEffect y crear el llamado a la API con Axios.

import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const response = await axios(url);
      setCategories(response.data.drinks);
    };
    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
