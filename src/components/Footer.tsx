import React from "react";
import { Link } from "react-router-dom";
import AtIcon from "./svg/AtIcon";
import LinkedInIcon from "./Home/svg/LinkedInIcon";
import GithubIcon from "./Home/svg/GithubIcon";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <section className="footer__info">
                    <p className="footer__info-copyright">
                        Created by Fabio Ribeiro &copy; {new Date().getFullYear()}
                    </p>
                </section>
                <section className="footer__links">
                    <Link
                        to="https://www.linkedin.com/"
                        target="_blank"
                        className="footer__links-link"
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link
                        to="https://github.com/Fabio-R04"
                        target="_blank"
                        className="footer__links-link"
                    >
                        <GithubIcon />
                    </Link>
                </section>
            </div>
        </footer>
    )
}

export default Footer;