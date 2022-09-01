import './App.css';
import Header from './components/Header/Header';
import Productos from './components/Productos/Productos';

function App() {

  const stock= [{nombre: "Remera", precio:"$2000", color: "rojo"},
  {nombre: "musculosa", precio:"$1500", color: "azul"}]
  
  return (
    <div>
      <Header />
      <Productos items={{stock}}/>
    </div>
  );
}

export default App;
