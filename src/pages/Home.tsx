import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import GithubIcon from "../components/Home/svg/GithubIcon";
import Lottie from "react-lottie";
import animationData from "../assets/animations/home.json";
import LinkedInIcon from "../components/Home/svg/LinkedInIcon";
const homeImage = require("../assets/images/fullstack.png");

interface HomeProps {
    homeRef: React.RefObject<HTMLDivElement>;
}

function Home({ homeRef }: HomeProps) {
    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section className="home" id="home" ref={homeRef}>
            <div className="home__details">
                <p className="home__details-greeting">
                    Hello, I'm
                </p>
                <h1 className="home__details-name">
                    Fabio Ribeiro
                </h1>
                <p className="home__details-dev">
                    Full Stack Developer
                </p>
                <p className="home__details-description">
                    I specialize in the creation of both frontend<br />
                    and backend web development.
                </p>
                <div className="home__details-interaction">
                    <Link
                        className="home__details-interaction__portfolio"
                        to="#portfolio"
                        smooth
                    >Portfolio</Link>
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
            </div>
            <Lottie
                options={defaultOptions}
                height={550}
                width={550}
                style={{ margin: 0 }}
            />
        </section>
    )
}

export default Home;