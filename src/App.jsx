import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

import Social from "./components/Social";

function App() {
    return (
        <>
            <Header />
            <Social />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;