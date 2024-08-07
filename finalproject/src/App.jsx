import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Componnets/Products';
import Home from './Componnets/Home';
import Login from './Componnets/Login';
import Register from './Componnets/Register';
import Cart from './Componnets/Cart';
import Brand from './Componnets/Brand';
import Categories from './Componnets/Categories';
import NotFound from './Componnets/NotFound';
import Layout from './Componnets/Layout';
import ProtectedRoute from './Componnets/ProtectedRoute';
import Forget from './Componnets/Forget';
import ResetCode from './Componnets/ResetCode';
import NewPassword from './Componnets/NewPassword';
import ProductDetails from './Componnets/ProductDetails';


export default function App() {


  let routes = createBrowserRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <ProtectedRoute> <Home></Home></ProtectedRoute> },
      { path: '/products', element: <ProtectedRoute><Products></Products></ProtectedRoute> },
      { path: '/cart', element: <ProtectedRoute> <Cart></Cart> </ProtectedRoute> },
      { path: '/register', element: <Register></Register> },
      { path: '/forget', element: <Forget></Forget> },
      { path: '/productdetails/:id/:category', element: <ProductDetails></ProductDetails> },
      { path: '/newpassword', element: <NewPassword></NewPassword> },
      { path: '/reset', element: <ResetCode></ResetCode> },
      { path: '/login', element: <Login></Login> },
      { path: '/brand', element: <ProtectedRoute><Brand></Brand></ProtectedRoute> },
      { path: '*', element: <NotFound></NotFound> }
    ]
  }])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
