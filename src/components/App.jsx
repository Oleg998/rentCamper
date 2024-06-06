import MainMenu from "./MaimMenu/MainMenu"
import { Route , Routes } from "react-router-dom";
import HomePage from "./pages/HomePages/HomePage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import CatalogPage from "./pages/CatalogPages/CatologPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return  (<div>
  
  <MainMenu/>
  <ToastContainer autoClose={5000} />
  <Routes>
   <Route path="/"  element={<HomePage/>}/>
   <Route path="/catalog"  element={<CatalogPage/>}/>
   <Route path="/favorites"  element={<FavoritesPage/>}/>
   <Route path="*" element= {<HomePage/>}  /> 
  </Routes>
  </div>)
};