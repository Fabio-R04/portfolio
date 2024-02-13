import React, { Fragment } from "react";
import DeveloperIcon from "../components/About/svg/DeveloperIcon";
import Card from "../components/About/Card";
import CodeIcon from "../components/About/svg/CodeIcon";
import HtmlIcon from "../components/About/svg/HtmlIcon";
import DatabaseIcon from "../components/About/svg/DatabaseIcon";
import StylesIcon from "../components/About/svg/StylesIcon";
import { getCurrentAge } from "../reusable";
import SectionHeader from "../components/SectionHeader";
import Lottie from "react-lottie";
import animationData from "../assets/animations/about.json";
import Media from "react-media";

interface AboutProps {
    aboutRef: React.RefObject<HTMLDivElement>;
}

function About({ aboutRef }: AboutProps) {
    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <section className="about" id="about" ref={aboutRef}>
            <div className="about__container">
                <SectionHeader
                    name="About"
                    index="01"
                />
                <div className="about__content">
                    <div className="about__content-description">
                        <p>
                            Hey, I'm Fabio Ribeiro, an {getCurrentAge()}-year-old self-taught full-stack web developer with a deep
                            passion for bringing digital ideas to life. I'm on the exciting journey of mastering the art
                            and science of web development, fueled by my love for coding and a hunger for
                            continuous learning.
                        </p>
                        <p>
                            I started this coding journey early because I couldn't resist the thrill of building
                            something from scratch. Every line of code is an opportunity to make a difference.
                            What keeps me going is the constant drive to learn and improve. I'm not just chasing
                            perfection; I'm enjoying the journey of getting there.
                        </p>
                    </div>
                    <div className="about__content-image">
                        <Media queries={{
                            small: "(max-width: 500px)",
                            large: "(min-width: 501px) and (max-width: 1000px)",
                            extraLarge: "(min-width: 1001px)"
                        }}>
                            {matches => (
                                <Fragment>
                                    {matches.small && (
                                        <Lottie 
                                            options={defaultOptions}
                                            height={350}
                                            width={350}
                                        />
                                    )}
                                    {matches.large && (
                                        <Lottie
                                            options={defaultOptions}
                                            height={420}
                                            width={420}
                                        />
                                    )}
                                    {matches.extraLarge && (
                                        <Lottie
                                            options={defaultOptions}
                                            height={500}
                                            width={500}
                                        />
                                    )}
                                </Fragment>
                            )}
                        </Media>
                    </div>
                </div>
            </div>
            <div className="about__skills">
                <SectionHeader
                    name="Skills"
                    index="02"
                />
                <div className="about__technologies">
                    <div className="about__technologies-content">
                        <Card
                            className="about__technologies-content__card"
                            icon={<CodeIcon />}
                            title="Backend"
                            technologies={[
                                "NodeJS",
                                "ExpressJS",
                                "JavaScript",
                                "TypeScript",
                                "Socket.io"
                            ]}
                        />
                        <Card
                            className="about__technologies-content__card"
                            icon={<HtmlIcon />}
                            title="Frontend"
                            technologies={[
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Redux Toolkit"
                            ]}
                        />
                        <Card
                            className="about__technologies-content__card"
                            icon={<DatabaseIcon />}
                            title="Database"
                            technologies={[
                                "MongoDB",
                                "Mongoose"
                            ]}
                        />
                        <Card
                            className="about__technologies-content__card"
                            icon={<StylesIcon />}
                            title="Styling"
                            technologies={[
                                "SCSS",
                                "Bootstrap"
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;