import React, { Fragment, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Media from "react-media";
import MenuIcon from "./svg/MenuIcon";
import CloseIcon from "./svg/CloseIcon";

interface NavbarProps {
    activeSection: string;
}

function Navbar({ activeSection }: NavbarProps) {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    return (
        <header className="navbar">
            <div className="navbar__content">
                <Link
                    className="navbar__brand"
                    to="#home"
                    smooth={true}
                >
                    Fabio<span>.dev</span>
                </Link>
                <Media queries={{
                    small: "(max-width: 1000px)",
                    large: "(min-width: 1001px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small && (
                                mobileMenu ? (
                                    <CloseIcon
                                        onClick={() => setMobileMenu(false)}
                                    />
                                ) : (
                                    <MenuIcon
                                        onClick={() => setMobileMenu(true)}
                                    />
                                )
                            )}
                            {matches.large && (
                                <nav className="navbar__navigation">
                                    <Link
                                        style={{
                                            ...(activeSection === "home") && { color: "#00d5ff" }
                                        }}
                                        className="navbar__navigation-link"
                                        to="#home"
                                        smooth={true}
                                    >Home</Link>
                                    <Link
                                        style={{
                                            ...(activeSection === "about") && { color: "#00d5ff" }
                                        }}
                                        className="navbar__navigation-link"
                                        to="#about"
                                        smooth={true}
                                    >About</Link>
                                    <Link
                                        style={{
                                            ...(activeSection === "portfolio") && { color: "#00d5ff" }
                                        }}
                                        className="navbar__navigation-link"
                                        to="#portfolio"
                                        smooth={true}
                                    >Portfolio</Link>
                                    <Link
                                        style={{
                                            ...(activeSection === "contact") && { color: "#00d5ff" }
                                        }}
                                        className="navbar__navigation-link"
                                        to="#contact"
                                        smooth={true}
                                    >Contact</Link>
                                </nav>
                            )}
                        </Fragment>
                    )}
                </Media>
            </div>
            <Media query="(max-width: 1000px)" render={() => (
                mobileMenu && (
                    <div className="navbar__dropdown">
                        <Link
                            style={{
                                ...(activeSection === "home") && { color: "#00d5ff" }
                            }}
                            className="navbar__dropdown-link"
                            to="#home"
                            smooth={true}
                        >Home</Link>
                        <Link
                            style={{
                                ...(activeSection === "about") && { color: "#00d5ff" }
                            }}
                            className="navbar__dropdown-link"
                            to="#about"
                            smooth={true}
                        >About</Link>
                        <Link
                            style={{
                                ...(activeSection === "portfolio") && { color: "#00d5ff" }
                            }}
                            className="navbar__dropdown-link"
                            to="#portfolio"
                            smooth={true}
                        >Portfolio</Link>
                        <Link
                            style={{
                                ...(activeSection === "contact") && { color: "#00d5ff" }
                            }}
                            className="navbar__dropdown-link"
                            to="#contact"
                            smooth={true}
                        >Contact</Link>
                    </div>
                )
            )} />
        </header>
    )
}

export default Navbar;