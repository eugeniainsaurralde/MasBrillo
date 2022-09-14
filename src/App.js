import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Productos/Productos';

function App() {
/* 
  const stock= [{id:1, nombre: "Remera", precio:"$2000", color: "rojo"},
  {id:2, nombre: "musculosa", precio:"$1500", color: "azul"}] */
  
  return (
    <div>
      <Header />
     {/*  <Productos items={{stock}}/> */}
      <ItemListContainer/>
    </div>
  );
}

export default App;
