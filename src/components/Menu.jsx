import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <article className="menu">
                <ul>
                    <li><Link to="/skills"><small>✦</small>Skills</Link></li>
                    <li><Link to="/experience"><small>✦</small>Experience</Link></li>
                    <li><Link to="/portfolio"><small>✦</small>Portfolio</Link></li>
                </ul>
            </article>
        </>
    );
}

export default Menu;