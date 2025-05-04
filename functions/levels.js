export function getXPForLevel(level) {
    const multiplier = 116;
    const exponent = 1.55;
    const base = 20022;

    return Math.floor(multiplier * Math.pow(level, exponent) + base);
};


