import audiLogo from "../img/audi-preloader_v01.gif";

function Portfolio() {
    return (
        <>
            <main>
                <h1>Web Design</h1>
                <section className="flexbox">
                    <article>
                        <a href="http://alofonia.udg.mx">Alofonía</a>
                    </article>
                    <article>
                        <a href="http://amidi.org">Cátedra AMIDI</a>
                    </article>
                    <article>
                        <a href="https://stupendous-dolphin-daa363.netlify.app/">Music Player</a>
                    </article>
                    <article>
                        <a href="http://www.comunicacionysociedad.cucsh.udg.mx/index.php/comsoc">Comunicación y Sociedad</a>
                    </article>
                    <article>
                        <a href="https://sunny-sunflower-5b2de2.netlify.app/">Jokes API App</a>
                    </article>
                </section>
                <h1>Graphic Design</h1>
                <section>
                    <article>
                        <iframe src="https://app.milanote.com/1NH2BQ11CPyN4x?p=vnGem9f5N7m" width="100%" height="500" frameborder="0"></iframe>
                    </article>
                </section>
                <h1>Motion Design</h1>
                <section>
                    <article>
                        <figure>
                            <img src={audiLogo} alt="Audi Preloader" />
                        </figure>
                    </article>
                    <article>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/esFEqdH2izs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </article>
                    <article>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/96YKgB9dVRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </article>
                </section>
                <h1>Editorial Design</h1>
                <section>
                    <article>
                        <embed src="https://www.amidi.org/wp-content/uploads/2019/06/Alcala_Fabiola_Los-spots-televisivos-de-las-elecciones-en-Jalisco-2015.pdf" width="100%" height="500" type="application/pdf"></embed>
                    </article>
                    <article>
                        <embed src="https://www.amidi.org/wp-content/uploads/2019/06/Franco_Darwin_Cartilla-de-Alfabetizaci%C3%B3n-Ciudadana.pdf" width="100%" height="500" type="application/pdf"></embed>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Portfolio;