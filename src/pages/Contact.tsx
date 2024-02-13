import React from "react";
import SectionHeader from "../components/SectionHeader";
import LocationIcon from "../components/Contact/svg/LocationIcon";
import EmailIcon from "../components/Contact/svg/EmailIcon";

interface ContactProps {
    contactRef: React.RefObject<HTMLDivElement>;
}

function Contact({ contactRef }: ContactProps) {
    return (
        <section className="contact" id="contact" ref={contactRef}>
            <div className="contact__container">
                {/* <SectionHeader
                    name="Contact"
                    index="04"
                /> */}
                <div className="contact__container-heading">
                    <h1>Get In Touch</h1>
                    <p>
                        Actively pursuing new career prospects to leverage my
                        skills and create a meaningful impact. Feel free to reach
                        out via email at any time.
                    </p>
                </div>
                <div className="contact__container-info">
                    <div className="contact__container-data">
                        <div className="contact__container-data__left">
                            <LocationIcon />
                        </div>
                        <div className="contact__container-data__right">
                            <p>Location</p>
                            <p>New York, United States</p>
                        </div>
                    </div>
                    <div className="contact__container-data">
                        <div className="contact__container-data__left">
                            <EmailIcon />
                        </div>
                        <div className="contact__container-data__right">
                            <p>Email</p>
                            <p>fab8.ribeiro@icloud.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;