import './App.css';

function App() {
  let imagen1= "download.jpg" ;
  let titulo= "Big Mac";
  let calorias= "505 kcal";
  let descripcion= "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único."
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-md-4 offset-md-2'>
            <img src={imagen1} alt= {titulo} className="img-fluid"/>
          </div>
          <div className='col-md-4'>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <p>{calorias}</p>
          </div>
      </div>

    </div>
  );
}

export default App;
