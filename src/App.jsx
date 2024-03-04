import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';


import Home from './components/Home/Home.jsx';
import Crew from './components/Crew/Crew.jsx';
import Technology from './components/Technology/Technology.jsx';
import Destination from './components/Destination/Destination.jsx';


export default function App() {

    let [planet, setPlanet] = useState("Moon")

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
        {
            path:"/destination/:planet",
            element: <Destination selection={planet} setPlanet={setPlanet} />,
        },
    ])

    return(
        <div className='App'>
            <RouterProvider router={pages}/>
        </div>
    )
}