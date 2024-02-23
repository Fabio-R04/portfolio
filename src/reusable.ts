export const getCurrentAge = (): number => {
    const birthDateString = `${process.env.REACT_APP_BIRTHDATE}`;
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    const ageInYears = currentYear - birthYear - (currentDate < new Date(currentYear, birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

    return ageInYears;
};

export const projectImageHT: Record<string, any> = {
    "Twitter Clone": require("./assets/images/porfolio/twitter-clone.png"),
    "Movierv": require("./assets/images/porfolio/movierv.png"),
    "Shopsmart": require("./assets/images/porfolio/shopsmart.png"),
    "Discord Clone": require("./assets/images/porfolio/discord-clone.png")
}

export const projectUrlHT: { [key: string]: { github: string; live: string; } } = {
    "Twitter Clone": {
        github: "https://github.com/Fabio-R04/twitter-clone",
        live: "https://twitter-clone-r04.netlify.app"
    },
    "Movierv": {
        github: "https://github.com/Fabio-R04/movierv-app",
        live: "https://movierv.netlify.app"
    },
    "Shopsmart": {
        github: "https://github.com/Fabio-R04/shopsmart-ecommerce-app",
        live: "https://shopsmart-store.netlify.app"
    },
    "Discord Clone": {
        github: "https://github.com/Fabio-R04/discord-clone",
        live: "https://discord-clone-r04.netlify.app"
    }
}