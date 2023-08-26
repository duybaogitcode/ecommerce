import Navigation from './customer/layout/navigation/navbar';
import { HomePage } from './customer/page/homePage/homePage';
import './App.css';
import FooterDefault from './customer/layout/footer/footer';
import { CartProvider } from './customer/context/cartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './customer/page/login/loginPage';
import { AuthProvider } from './customer/context/authContext';
import { ProductProvider } from './customer/context/productContext';
import ProductDetails from './customer/page/product/productDetails';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <div className='App'>
              <Navigation></Navigation>
              <div>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/details/:id' element={<ProductDetails />} />
                  <Route path='/login' element={<LoginPage />} />
                </Routes>
              </div>
              <FooterDefault></FooterDefault>
            </div>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
