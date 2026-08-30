import { Link, Outlet } from "react-router-dom";
import { Sandpack } from "@codesandbox/sandpack-react";

const Hero = () => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-container">
                    <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/react-logo.png" alt="" />
                    <h1>React</h1>
                    <p>Een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces.</p>
                    <Link to="Documentatie">
                        <button>Beginnen</button>
                    </Link>
                </div>

                <div className="hero-container-2">
                    <div className="block">
                        <h1>Herbruikbaar</h1>
                        <p>React werkt met herbruikbare componenten. Hierdoor kun je dezelfde onderdelen makkelijk op verschillende plekken gebruiken.</p>
                    </div>

                    <div className="block">
                        <h1>Snel</h1>
                        <p>React vernieuwt alleen de onderdelen die veranderen. Hierdoor blijven websites snel en soepel werken.</p>
                    </div>

                    <div className="block">
                        <h1>Interactief</h1>
                        <p>Met React kun je eenvoudig interactieve websites maken. Denk aan knoppen, formulieren en live updates.</p>
                    </div>

                    <div className="block">
                        <h1>Flexibel</h1>
                        <p>React kan voor verschillende soorten projecten worden gebruikt. Van kleine websites tot grote webapplicaties.</p>
                    </div>

                    <div className="block">
                        <h1>Populair</h1>
                        <p>React wordt door veel ontwikkelaars en bedrijven gebruikt. Hierdoor is er een grote community en veel ondersteuning.</p>
                    </div>

                    <div className="block">
                        <h1>Modern</h1>
                        <p>React helpt je moderne en dynamische interfaces te bouwen. Het werkt goed samen met moderne JavaScript-technieken.</p>
                    </div>
                </div>

                <div className="hero-container-3">
                    <div className="sandpack">
                        <Sandpack
                            template="react"
                            files={{
                                "/App.js": `const Greeting = () => {
    return (
        <>
            <h1>Hello, I am Jason!</h1>
        </>
    );
}

export default Greeting;
`,
                            }}
                        />
                    </div>

                    <div className="hero-container-3-text-container">
                        <h1>Components!</h1>
                        <p>Componenten zijn herbruikbare bouwstenen van een React-applicatie. Deze component, genaamd Greeting, toont een koptekst met de tekst "Hello, I am Jason!". Door componenten te gebruiken kun je onderdelen van een website eenvoudig hergebruiken en overzichtelijk houden.</p>
                    </div>

                </div>

                <div className="hero-container-4">
                    <p>React is een goede keuze als je moderne en interactieve websites wilt leren bouwen. Het maakt het ontwikkelen overzichtelijker en geeft je de mogelijkheid om stap voor stap steeds complexere projecten te maken. Of je nu net begint of al ervaring hebt met JavaScript, met React kun je op een praktische manier veel nieuwe dingen ontdekken.</p>
                    <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/whyreact.png" alt="" />
                </div>

            </div>

        </>
    );
};

export default Hero;