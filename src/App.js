import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage/HomePage';
import Footer from './components/Home/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Login/LoginPage/LoginPage';
import Register from './components/Login/Register/Register';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import AddReview from './components/Dashboard/AddReview';
import ManageOrders from './components/Dashboard/ManageOrders';
import AddProduct from './components/Dashboard/AddProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './components/Login/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>

          <Route path='/home' element={<HomePage></HomePage>}></Route>

          <Route path='/purchase/:id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>

          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>

            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>

            <Route path='addReview' element={<AddReview></AddReview>}></Route>

            <Route path='manageOrders' element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }></Route>

            <Route path='addProduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }></Route>

            <Route path='makeAdmin' element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }></Route>

            <Route path='manageProducts' element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }></Route>
          </Route>

          <Route path='/login' element={<LoginPage></LoginPage>}></Route>

          <Route path='/register' element={<Register></Register>}></Route>

          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>

          <Route path='/blogs' element={<Blogs></Blogs>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
