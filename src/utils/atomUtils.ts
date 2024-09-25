const getAtomColorScheme = (player: number) =>{
    switch (player) {
        case 1:
            return {
                outlineColor: "#6EE98D",
                fillColor: "#439658",
            };
        case 2:
            return {
                outlineColor: "#C470b6",
                fillColor: "#964388",
            };
        default:
            return {
                outlineColor: "#6EE98D",
                fillColor: "#439658",
            };
    }
}

export {getAtomColorScheme}