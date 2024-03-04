import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/shared/logo.svg"


export default function Navbar() {
    

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
                <Link to="/"><button>00 HOME</button></Link>
                <Link><button>01 DESTINATION</button></Link>
                <Link to="/crew"><button>02 CREW</button></Link>
                <Link to="/technology"><button>03 TECHNOLOGY</button></Link>
            </div>
        </nav>
    )
}