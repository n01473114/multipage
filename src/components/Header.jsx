import { Link } from "react-router-dom";
import MenuContainer from "./MenuContainer";
import myLogo from "../img/logo_js.svg";

function Header() {
    return (
        <header>
            <Link to="/"><div className="logoContainer">
                <object className="logoObj" data={myLogo} width="50" height="50"></object>
            </div></Link>
            <nav id="navText">
                <ul>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
            <a href="tel:+16479467300"><button className="bttn">📞</button></a>

            <MenuContainer />

        </header >
    );
}

export default Header;