import React from "react";
import SectionHeader from "../components/SectionHeader";
import Project from "../components/Portfolio/Project";

interface PortfolioProps {
    portfolioRef: React.RefObject<HTMLDivElement>;
}

function Portfolio({ portfolioRef }: PortfolioProps) {
    return (
        <section className="portfolio" id="portfolio" ref={portfolioRef}>
            <SectionHeader
                name="Portfolio"
                index="03"
            />
            <div className="portfolio__projects">
                <Project
                    projectName="Twitter Clone"
                    projectDescription="Twitter Clone is a dynamic social media application offering a seamless user experience. Users can easily log in or sign up, leveraging the convenience of Google authentication. Express your thoughts through customizable posts, with the flexibility to delete when needed. Interact with content by liking, reposting, bookmarking, and replying. Foster connections by following or unfollowing other users, creating a personalized and engaging social network."
                    technologies={[
                        "TypeScript",
                        "React",
                        "Redux Toolkit",
                        "NodeJS",
                        "ExpressJS",
                        "MongoDB",
                        "SCSS"
                    ]}
                    swap={false}
                />
                <Project
                    projectName="Movierv"
                    projectDescription="Movierv, the ultimate destination for movie enthusiasts, offers an immersive experience focused on exploration and critique. Easily login or sign up to delve into an extensive collection powered by The Movie Database API. Discover intricate details about movies and TV shows, leave thoughtful reviews and ratings to share your insights. While Movierv doesn't stream content, it provides a rich platform for users to curate favorites, add any movie or TV show to their collection, and immerse themselves in the world of cinematic appreciation."
                    technologies={[
                        "Typescript",
                        "React",
                        "Redux Toolkit",
                        "NodeJS",
                        "ExpressJS",
                        "MongoDB",
                        "SCSS"
                    ]}
                    swap={true}
                />
                <Project
                    projectName="Shopsmart"
                    projectDescription="Shopsmart, the ultimate shopping companion, empowers users with a seamless retail experience. Enjoy convenient login and signup options to access a vast array of products. For administrators, an intuitive dashboard facilitates easy product and category management, user oversight, and order tracking. Users can explore, search, and view product details effortlessly. Enhance your shopping journey by adding products to your cart, adjusting quantities on the fly, and experiencing swift, secure checkout with Stripe integration. Leave your mark by sharing detailed reviews and ratings for each purchased product, ensuring a community-driven shopping environment."
                    technologies={[
                        "Typescript",
                        "React",
                        "Redux Toolkit",
                        "NodeJS",
                        "ExpressJS",
                        "MongoDB",
                        "SCSS"
                    ]}
                    swap={false}
                />
                <Project
                    projectName="Discord Clone"
                    projectDescription="Discord Clone, your virtual communication hub, provides a seamless experience for connecting and collaborating. Enjoy a straightforward login and signup process to dive into a world of interactive features. Users can effortlessly manage connections by adding or removing friends, engage in direct messaging for private conversations, and create or join dynamic chat servers. Server owners wield the power to craft new text channels, fostering tailored communities. Personalize your presence by editing your profile, ensuring a customized and engaging social experience."
                    technologies={[
                        "Typescript",
                        "React",
                        "Redux Toolkit",
                        "NodeJS",
                        "ExpressJS",
                        "Socket.io",
                        "MongoDB",
                        "SCSS"
                    ]}
                    swap={true}
                />
            </div>
        </section>
    )
}

export default Portfolio;