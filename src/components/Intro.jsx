import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Intro() {
    return (
        <>
            <h1 id="name">José Sandoval</h1>
            <section className="home-container">
                <Menu />
                <article className="intro">
                    <p>I'm a designer who works with organizations interested in promoting their voices within the discussion of public affairs and social issues. I focus my efforts on projects that require careful management of specialized and multidisciplinary information, whose main challenge is a precise depiction of client's needs, desires and information into deliverables aimed at audiences that do not always have the same level of knowledge as my clients.</p>
                    <Link to="/about"><button className="bttn">More</button></Link>
                </article>
            </section>
        </>
    );
}

export default Intro;