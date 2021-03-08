const low = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const big = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number < 100) return getWord(number);

    let result = "";
    const queue = number.toString().split("");
    const subNumber = Math.floor(number / Math.pow(10, 2)) % 10;
    result += `${getWord(subNumber)} hundred `;
    queue.shift();

    if (queue.join("") !== "00") return (result += `${getWord(+queue.join(""))}`);

    return result.trim();
};

function getWord(number) {
    if (number < 1) return low[0];
    if (number < 20) return low[number];

    return `${big[Math.floor(number / 10) - 2]}${number % 10 > 0 ? " " + low[number % 10] : ""}`;
}
