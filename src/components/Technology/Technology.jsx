import "./Technology.css"

import Navbar from "../Navbar/Navbar"
import Data from "../../assets/data.json"
import { useState } from "react"



export default function Technology({page, setPage, }) {
    
    let [name, setName] = useState("Launch vehicle")

    function handleSlide(e) {
        if (e.target.id == 1) {
            setName("Launch vehicle")
        } else if (e.target.id == 2) {
            setName("Spaceport")
        } else if (e.target.id == 3) {
            setName("Space capsule")
        }
        
        Array.from(e.target.parentElement.children).forEach(btn => {
            if (e.target.id == btn.id) {
                btn.classList.remove("btnRoundTransparent")
                btn.classList.add("btnRoundWhite")
            } else {
                btn.classList.add("btnRoundTransparent")
                btn.classList.remove("btnRoundWhite")
            }
        });
    }

    return(
        <div className="Technology">
            <Navbar page={page} setPage={setPage}/>

            <div className="technologyDiv">
                <div className="TechnologyTitle">
                    <p>03</p>
                    <p>SPACE LAUNCH 101</p>
                </div>

                <div>
                    {
                        Data["technology"].filter(d => d.name == name).map((d,i)=>(
                            <div key={i} className="technologyCore">

                            <div className="leftDiv">
                                <div className="btnDiv">
                                    <div onClick={handleSlide} id='1' className="btnRound btnRoundWhite">
                                        1
                                    </div>
                                    <div onClick={handleSlide} id='2' className="btnRound btnRoundTransparent">
                                        2
                                    </div>
                                    <div onClick={handleSlide} id='3' className="btnRound btnRoundTransparent">
                                        3
                                    </div>
                                </div>
                                <div className="textDiv">
                                    <p>THE TERMINOLOGY...</p>
                                    <h2>{d.name.toLocaleUpperCase()}</h2>
                                    <p>{d.description}</p>
                                </div>
                            </div>

                            <div className="rightDiv">
                                <img src={d.images.portrait} alt="" />
                            </div>

                            </div>
                        ))
                    }


                    

                </div>
            </div>
            


        </div>
    )
}