import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import SellerProfile from './components/sellerProfile/SellerProfile';
import BuyerProfile from './components/Buyerprofile/BuyerProfile';
import UploadProduct from './components/uploadproduct/UploadProduct'



function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Root/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'new-user',
          element:<Register/>
        },
        {
          path:'buyerprofile',
          element:<BuyerProfile/>,
          
        },
        {
          path:'sellerprofile',
          element:<SellerProfile/>,
        },
            {
            path:'uploadproduct',
            element:<UploadProduct/>,
            }
          
        
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
