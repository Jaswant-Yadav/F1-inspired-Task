
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path="/category/tees" element={<Category />} />
        <Route path="/products" element={<ProductList />} />
           <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
