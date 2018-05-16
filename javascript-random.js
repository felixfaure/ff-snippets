// http://thenewcode.com/82/Recipes-for-Randomness-in-JavaScript

// Basic: 0 Included and 1 Excluded
// example: 0.19401081069372594
function getRandom() {
    return Math.random();
}
getRandom();

// Between Numbers: Min Included, Max Excluded
// example: 75.31898734299466
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
getRandomFloat(11, 101);

// Between Integer: Min Included, Max Excluded
// example: 12
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 20);

// Between Integer: Min Included, Max Included
// example: 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10);

// 0 or 1
// example: 0
function coinToss() {
    return Math.floor(Math.random() * 2);
}
coinToss();
// True or false
// example: false
function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}
coinToss();
// 2 values
// example: up
function coinFlip() {
    return (Math.floor(Math.random() * 2) === 0) ? "up" : "down";
}
coinFlip();

// Random a array value
// example: 9
function getRandomArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
var numPool = [ 1, 3, 5, 7, 9, 10 ],
getRandomArray(numPool);

// Shuffle a array
// example: [ 21, 36, 10, 13, 14, 27 ]
function shuffle(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};
var numPool = [ 13, 21, 36, 14, 27, 10 ];
var randomResult = shuffle(numPool);

// Cryptographic Randomness
// in this example: an array with eight different slots that can each contain an unsigned 16-bit integer
// example: [43484, 57947, 46691, 49849, 24272, 11827, 28203, 17423]
// http://caniuse.com/#search=Web%20Cryptography
var cryptoStor = new Uint16Array(8); // or Int8Array, Uint8Array, int16Array, Int32Array and Uint32Array.
// Then, fill the array with random numbers of the defined type:
window.crypto.getRandomValues(cryptoStor);
