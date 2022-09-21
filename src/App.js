import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/carrito'} element={<ItemListContainer/>}/>
        <Route path={"/carrito/:id"} element={<ItemDetailContainer/>} />
      </Routes>
    </>
  );
}

export default App;
