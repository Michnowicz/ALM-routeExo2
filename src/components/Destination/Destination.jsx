import { useEffect, useState } from "react"
import "./Destination.css"
import { useParams  } from 'react-router-dom';
import { Link } from "react-router-dom"

import Navbar from "../Navbar/Navbar";
import Data from "../../assets/data.json"



export default function Destination({page, setPage, selection, setPlanet}) {

    const {planet} = useParams
    
    function handlePlanet(e) {
        setPlanet(e.target.id)
        console.log(e.target.parentElement.children);


        Array.from(e.target.parentElement.children).forEach(btn => {
            if (e.target.id == btn.id) {
                console.log(btn.id);
                btn.classList.add("selected")
            } else {
                btn.classList.remove("selected")
            }
        });
    }

    return(
        <div className="Destination">
            <Navbar  page={page} setPage={setPage}/>
            <div className="DestinationDiv">
                <div className="DestinationTitle">
                    <p>01</p>
                    <p>PICK YOUR DESTINATION</p>
                </div>


                {
                    Data["destinations"].filter(d => d.name == selection).map((d, i) => (

                        <div key={i} className="planetBtn">
                            <div className="left">
                                <img src={d.images.png} alt="" />
                            </div>

                            <div className="right">
                                <div className="linkDiv">
                                    {
                                        Data["destinations"].map((d,i)=>(
                                            <Link to={"/destination/"+d.name} id={d.name} key={i} className="planetSelect" onClick={handlePlanet}>
                                                {d.name.toLocaleUpperCase()}
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div className="planetText">
                                    <h2>{d.name.toLocaleUpperCase()}</h2>
                                    <p>{d.description}</p>
                                </div>
                                <hr />
                                <div className="travel">
                                    <p>EST. TRAVEL TIME</p>
                                    <h2>{d.travel}</h2>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }

            </div>
        </div>
    )
}