import React from "react";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    technologies: string[];
    className?: string;
}

function Card({ icon, title, technologies, className }: CardProps) {
    return (
        <div className={`card ${className ? className : ""}`}>
            <div className="card__icon">
                {icon}
            </div>
            <p className="card__title">{title}</p>
            <div className="card__technologies">
                {technologies.map((technology: string, index: number) => (
                    <p
                        key={index}
                        className="card__technologies-technology"
                    >{technology}</p>
                ))}
            </div>
        </div>
    )
}

export default Card;