import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';


import Home from './components/Home/Home.jsx';
import Crew from './components/Crew/Crew.jsx';
import Technology from './components/Technology/Technology.jsx';

const pages= createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/crew",
    element: <Crew/>,
  },
  {
    path:"/technology",
    element: <Technology/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pages} />
  </React.StrictMode>,
)
