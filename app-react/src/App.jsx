import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBarBoost from './components/NavBar/NavBar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <div className="App">
      <NavBarBoost />
      <ItemListConteiner />
    </div>
  )
}


export default App