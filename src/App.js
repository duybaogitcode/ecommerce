import Navigation from './customer/components/navigation/Navigation';
import { HomePage } from './customer/page/homePage/homePage';
import './App.css';
import FooterDefault from './customer/components/footer/footer';
import { CartProvider } from './customer/components/context/cartContext';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Navigation></Navigation>
        <div>
          <HomePage></HomePage>
        </div>
      </CartProvider>
      <FooterDefault></FooterDefault>
    </div>
  );
}

export default App;
