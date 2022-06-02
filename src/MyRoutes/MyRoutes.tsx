import MyNavbar from '../MyNavbar/MyNavbar';
import { Route, Routes } from 'react-router-dom';
import Blog from '../component/Blog/Blog';
import Home from '../component/Home/Home';
import Footer from '../component/Footer/Footer';
import ContactInfo from '../component/ContactInfo/ContactInfo';
import Rewiev from '../component/Rewiev/Rewiev';
import About from '../component/About/About';
import AddPoduct from '../CRUD/AddProduct';
import ProductList from '../CRUD/ProductList';
import EditProduct from '../CRUD/EditProduct';


const MyRoutes = () => {
    return (
          <>
          <MyNavbar/>
            <Routes>
              <Route path='/add' element={<AddPoduct />} />
              <Route path='edit/:id' element={<EditProduct/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/shop' element={<ProductList/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<ContactInfo/>} />
              <Route path='/rew' element={<Rewiev/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          <Footer />
          </>
    );
};

export default MyRoutes;