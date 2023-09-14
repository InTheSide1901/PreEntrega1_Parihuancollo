import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Inicio from './paginas/Inicio';
import Informacion from './paginas/Informacion';
import Contacto from './paginas/Contacto';
import Destacados from './paginas/Destacados';
import Navbar from './components/Navbar';
import { Form } from 'react-router-dom';
function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/destacados' element={<Destacados/>}/>
          <Route path='/informacion' element={<Informacion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
