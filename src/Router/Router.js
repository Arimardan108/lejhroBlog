import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import PajeNew from "../PajeNew/PajeNew";
import Categotie from "../LesCatégories/Categotie";
import PajeCommender from "../CommenderPrudact/PajeCommender";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ShopCrad from "../Context/ShopCrad";
import Navbar from "./Components/Navbar";
import Login from "../Login/Login";
import Footer from "./Components/Footer";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ShopCrad>
          <Navbar />
          <Routes>
            <Route path="/Ecommerce" Component={Home} />
            <Route path="/Ecommerce/proudact/:id" Component={PajeCommender} />
            <Route path="/Ecommerce/newproidacts" Component={PajeNew} />
            <Route path="/Ecommerce/categorie/:id" Component={Categotie} />
            <Route path="/login" Component={Login} />
            <Route path="/mycart" Component={ShoppingCart} />
          </Routes>
          <Footer />
        </ShopCrad>
      </BrowserRouter>
    </>
  );
}
