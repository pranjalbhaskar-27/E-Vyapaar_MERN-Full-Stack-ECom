import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Pages/HomePage/Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './components/Products/Products';
import ProdDesc from './Pages/ProdDesc.js/ProdDesc';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} exact />
          <Route path='/product/:id' element={<ProdDesc/>} exact />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
