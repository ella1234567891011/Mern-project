import Registration from "./authentication/signup/signup-component";
import Login from "./authentication/login/login-component";
import HomePage from "./page/home/home-components";
import Walmart from "./page/layout/walmart-component";
import Product from "./page/layout/product-component";
import Sidebar from "./navigation/sidebar/sidebar.components";
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./authentication/context/AuthContext";
import './App.css';

function App() {
  return (
   <div>
    <AuthProvider>
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/walmart" element={<Walmart/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
    </Routes>
    </AuthProvider>
   </div>
  );
}

export default App;
