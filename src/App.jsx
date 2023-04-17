import { useState } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import MainLayout from "./layouts/MainLayout";
import Customer from "./pages/Customer";
import Ecommerce from "./pages/Ecommerce";
import EditProducts from "./pages/EditProducts";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import InvoiceDetail from "./pages/InvoiceDetail";
import Login from "./pages/Login";
import Order from "./pages/Order";
import OrderView from "./pages/OrderView";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/invoice/" element={<Invoice />} />
          <Route path="/invoice/:id" element={<InvoiceDetail />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ecommerce/" element={<Ecommerce />} />
          <Route path="/ecommerce/products" element={<Products />} />
          <Route path="/ecommerce/product/:id" element={<EditProducts />} />
          <Route path="/ecommerce/order" element={<Order />}>
            <Route path="/ecommerce/order/:id" element={<OrderView />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
