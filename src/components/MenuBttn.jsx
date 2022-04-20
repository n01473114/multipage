import { Link } from "react-router-dom";

function MenuBttn() {


    return (
        <>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menuBttn">
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
        </>
    );
}

export default MenuBttn;