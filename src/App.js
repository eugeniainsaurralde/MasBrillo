import './App.css';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount';
import Productos from './components/Productos/Productos';

function App() {

  const stock= [{nombre: "Remera", precio:"$2000", color: "rojo"},
  {nombre: "musculosa", precio:"$1500", color: "azul"}]
  
  return (
    <div>
      <Header />
      <Productos items={{stock}}/>
      <ItemCount stock="10" initial= {1} onAdd={0}/>
    </div>
  );
}

export default App;
