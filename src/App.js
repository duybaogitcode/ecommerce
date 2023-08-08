import Navigation from './customer/components/navigation/Navigation';
import { HomePage } from './customer/page/homePage/homePage';
import './App.css';
import FooterDefault from './customer/components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <div>
        <HomePage></HomePage>
      </div>
      <FooterDefault></FooterDefault>
    </div>
  );
}

export default App;
