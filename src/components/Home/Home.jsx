import "./Home.css"
import Navbar from "../Navbar/Navbar.jsx"

export default function Home() {
    

    return(
        <div className="Home">
            <Navbar/>
            <div className="HomeDiv">
                <div className="leftContainer">
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let's face it; if you want to go to the space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience! </p>
                </div>
                <div className="rightContainer">
                    <div className="whiteDiv">
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}