import './App.css';
import 'react-router-dom'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import OuterLayout from './Components/OuterLayout';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<OuterLayout/>}>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;