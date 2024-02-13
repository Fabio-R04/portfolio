import React from "react";

interface SectionHeaderProps {
    index: string;
    name: string;
    style?: any;
}

function SectionHeader({ name, index, style }: SectionHeaderProps) {
    return (
        <header style={style} className="section-header">
            <p className="section-header__index">
                {index}.
            </p>
            <h1 className="section-header__title">
                {name}
            </h1>
            <div className="section-header__line"></div>
        </header>
    )
}

export default SectionHeader;