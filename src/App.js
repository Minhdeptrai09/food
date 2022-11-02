import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddTodo from './components/ListTodo';
import History from './components/History';
import {Home} from './components/Home';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <div className="Header">
            <nav>
              <Link to='' className='mylink'>Home </Link>
              <Link to='AddTodo' className='mylink'>AddTodo </Link>
              <Link to='History' className='mylink'>History </Link>
            </nav>
          </div>
          <div className="Contener">
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/AddTodo' element={<AddTodo/>}></Route>
              <Route exact path='/History' element={<History/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        </header>
      </div>
  );
}

export default App;
