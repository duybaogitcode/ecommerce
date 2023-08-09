import Navigation from './customer/components/navigation/navbar';
import { HomePage } from './customer/page/homePage/homePage';
import productDetails from './customer/components/product/productDetails';
import './App.css';
import FooterDefault from './customer/components/footer/footer';
import { CartProvider } from './customer/components/context/cartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <CartProvider>
          <Navigation></Navigation>
          <div>
            <Routes>
              <Route path='/' exact Component={HomePage} />
              <Route path='/details' exact Component={productDetails} />
            </Routes>
          </div>
        </CartProvider>
        <FooterDefault></FooterDefault>
      </div>
    </BrowserRouter>
  );
}

export default App;
