module.exports.plus = (a, b) => {
    return a + b;
}

module.exports.minus = (a, b) => {
    return a - b;
}

module.exports.multiply = (a, b) => {
    return a * b;
}

module.exports.divide = (a, b) => {
    return b != 0 ? a / b : 0;
}

module.exports.baskara = (a, b, c) => {
    const delta = Math.pow(b, 2) - (4 * a * c);

    const xPositive = (-b + Math.sqrt(delta)) / (2 * a);
    const xNegative = (-b - Math.sqrt(delta)) / (2 * a);
    const result = [xPositive, xNegative];

    result.sort();

    return result;
}