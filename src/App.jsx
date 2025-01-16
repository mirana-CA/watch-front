import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Details from "./pages/Details";
import NoPage from "./pages/NoPage";
import Admin from "./adminPanel/Admin";
import AdminAdd from "./adminPanel/AdminAdd";
import AdminUpdate from "./adminPanel/AdminUpdate";
import AdminDetails from "./adminPanel/AdminDetails";
import Basket from "./pages/Basket";
import WishlistProvider from "./features/wishlistProvider";

function App() {
  return (
    <>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="basket" element={<Basket />} />

              <Route path="details/:id" element={<Details />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route>
              <Route path="admin" element={<Admin />} />
              <Route path="adminadd" element={<AdminAdd />} />
              <Route path="adminupdate/:id" element={<AdminUpdate />} />
              <Route path="admindetails/:id" element={<AdminDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </>
  );
}

export default App;
