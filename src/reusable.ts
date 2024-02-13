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