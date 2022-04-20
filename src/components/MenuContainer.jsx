import { Link } from "react-router-dom";

function MenuContainer() {


    return (
        <>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menuContainer">
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
        </>
    );
}

export default MenuContainer;