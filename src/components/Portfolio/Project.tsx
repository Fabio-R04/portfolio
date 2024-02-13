import React from "react";
import { projectImageHT } from "../../reusable";
import GithubIcon from "../Home/svg/GithubIcon";
import CodeIcon from "../About/svg/CodeIcon";

interface ProjectProps {
    projectName: string;
    projectDescription: string;
    technologies: string[];
    swap: boolean;
}

function Project({ projectName, projectDescription, technologies, swap }: ProjectProps) {
    return (
        <div className="portfolio__project">
            {(swap === true) && (
                <img
                    className="portfolio__project-image"
                    src={projectImageHT[projectName]}
                    alt="Project"
                />
            )}
            <div className="portfolio__project-content">
                <div style={{
                    ...(swap) && { marginLeft: "auto" }
                }} className="portfolio__project-content__heading">
                    <p style={{
                        ...(swap) && {marginLeft: "auto"}
                    }}>Featured</p>
                    <p>{projectName}</p>
                </div>
                <div className="portfolio__project-content__description">
                    <p>{projectDescription}</p>
                </div>
                <div style={{
                    ...(swap) && { marginLeft: "auto" }
                }} className="portfolio__project-content__technologies">
                    {technologies.map((technology: string, index: number) => (
                        <div className="portfolio__project-content__technologies-technology">
                            <p key={index}>{technology}</p>
                        </div>
                    ))}
                </div>
                <div style={{
                    ...(swap) && { marginLeft: "auto" }
                }} className="portfolio__project-content__links">
                    <button className="portfolio__project-content__links-live">
                        Live Demo
                        <GithubIcon />
                    </button>
                    <button className="portfolio__project-content__links-code">
                        Code
                        <CodeIcon />
                    </button>
                </div>
            </div>
            {(swap === false) && (
                <img
                    className="portfolio__project-image"
                    src={projectImageHT[projectName]}
                    alt="Project"
                />
            )}
        </div>
    )
}

export default Project;