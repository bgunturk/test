
import Product from './pages/Product/Product'
import User from './pages/User/User'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Home from './pages/Home/Home'
import './styles/global.scss'


import {
  createBrowserRouter,
  RouterProvider,
  
  Outlet
} from "react-router-dom";

const Layout = () => {
  return(
    <div className='main'>
        <Navbar/>
        <div className='container'>
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">  
              <Outlet/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
        path: "/",
        element: <Home/>
        },
      {
        path: "product",
        element: <Product/>
      },
      {
        path: "menu",
        element: <Product/>
      },
    
    ]
    
  },
  ]);
  

  return (
   <RouterProvider router={router}/>
  )
}

export default App
