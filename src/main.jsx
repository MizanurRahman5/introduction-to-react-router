import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/componenet/Home/Home.jsx';
import About from './assets/componenet/About/About.jsx';
import Contact from './assets/componenet/Contact/Contact.jsx';
import User from './assets/componenet/User/User.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
