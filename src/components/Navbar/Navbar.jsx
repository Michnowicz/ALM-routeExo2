import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/shared/logo.svg"
import { useState } from "react"


export default function Navbar({page, setPage}) {
    

    function handlePage(e) {
        setPage(e.target.id)
    }

    return(
        <nav>
            <div className="navIcon">
                <div className="logoWhite">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="navBreak">
                <hr />
            </div>
            <div className="navLink">
                <Link to="/"><button className={page == "home" ? "pageSelected" : ""} id="home" onClick={handlePage}>00 HOME</button></Link>
                <Link to="/destination/Moon" ><button className={page == "destination" ? "pageSelected" : ""}  id="destination"  onClick={handlePage}>01 DESTINATION</button></Link>
                <Link to="/crew"><button className={page == "crew" ? "pageSelected" : ""}  id="crew"  onClick={handlePage}>02 CREW</button></Link>
                <Link to="/technology"><button className={page == "technology" ? "pageSelected" : ""}  id="technology"  onClick={handlePage}>03 TECHNOLOGY</button></Link>
            </div>
        </nav>
    )
}