import Navigation from './customer/components/navigation/Navigation';
import { HomePage } from './customer/page/homePage/homePage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <div>
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
