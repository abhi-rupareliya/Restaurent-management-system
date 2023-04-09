import './App.css'
import 'react-router-dom'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import OuterLayout from './Components/OuterLayout'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/Signup'
import './index.css'
import ManagerDashb from './Components/ManagerDashb'
import CashierDashb from './Components/CashierDashb'
import Menu from './Components/Menu'
import Orders from './Components/Orders'
import EditOrder from './Components/EditOrder'
import Orderdata from './Components/OrderData'
import Users from './Components/Users'
import AddTable from './Components/AddTable'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<OuterLayout/>}>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/manager/:id' element={<ManagerDashb/>}/>
          <Route exact path='/cashier/:id' element={<CashierDashb/>}/>
          <Route exact path='/manager/menu' element={<Menu/>}/>
          <Route exact path='/cashier/takeorders' element={<Orders/>}/>
          <Route exact path='/editorders/:tab_id' element={<EditOrder/>}/>
          <Route exact path='/manager/orderdata' element={<Orderdata/>}/>
          <Route exact path='/manager/users' element={<Users/>}/>
          <Route exact path='/manager/addtable' element={<AddTable/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;