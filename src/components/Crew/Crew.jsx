import "./Crew.css"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import Data from "../../assets/data.json"



export default function Crew({page, setPage}) {

    let [crew, setCrew] = useState("Douglas Hurley")

    function handleSlide(e) {
        if (e.target.id == 1) {
            setCrew("Douglas Hurley")
        } else if (e.target.id == 2) {
            setCrew("Mark Shuttleworth")
        } else if (e.target.id == 3) {
            setCrew("Victor Glover")
        } else if (e.target.id == 4) {
            setCrew("Anousheh Ansari")
        }
        
        Array.from(e.target.parentElement.children).forEach(btn => {
            if (e.target.id == btn.id) {
                console.log(btn.id);
                btn.classList.remove("btnGrey")
                btn.classList.add("btnWhite")
            } else {
                btn.classList.add("btnGrey")
                btn.classList.remove("btnWhite")
            }
        });
    }
    
    return(
        <div className="Crew">
            <Navbar page={page} setPage={setPage}/>
            <div className="CrewDiv">
                <div className="CrewTitle">
                    <p>02</p>
                    <p>MEET YOUR CREW</p>
                </div>
                {
                    Data["crew"].filter(d => d.name == crew).map((d,i) => (
                        <div key={i} className="carousel">
                            <div className="carData">
                                <div className="carText">
                                    <h3>{d.role.toLocaleUpperCase()}</h3>
                                    <h2>{d.name.toLocaleUpperCase()}</h2>
                                    <p>{d.bio}</p>
                                </div>
                                <div className="carBtn">
                                    <button id="1" className="roundBtn btnWhite" onClick={handleSlide}></button>
                                    <button id="2" className="roundBtn btnGrey" onClick={handleSlide}></button>
                                    <button id="3" className="roundBtn btnGrey" onClick={handleSlide}></button>
                                    <button id="4" className="roundBtn btnGrey" onClick={handleSlide}></button>
                                </div>
                            </div>
                            <div className="carImg">
                                <img className="crewImg" src={d.images.png} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}