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
    let [page, setPage] = useState("home")

    const pages= createBrowserRouter([
        {
            path:"/",
            element: <Home page={page} setPage={setPage}/>,
        },
        {
            path:"/crew",
            element: <Crew  page={page} setPage={setPage}/>,
        },
        {
            path:"/technology",
            element: <Technology  page={page} setPage={setPage}/>,
        },
        {
            path:"/destination/:planet",
            element: <Destination  page={page} setPage={setPage} selection={planet} setPlanet={setPlanet} />,
        },
    ])

    return(
        <div className='App'>
            <RouterProvider router={pages}/>
        </div>
    )
}