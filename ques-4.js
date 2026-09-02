function getCngFare(dist, isNight = false , waitTime = 0) {
    let fare = 50 + ((dist - 2) * 15) + (waitTime * 2);
    return isNight ? (fare + (fare * (20/100)))  : fare; 
}

console.log(getCngFare(20));
console.log(getCngFare(20, true));
console.log(getCngFare(20, true, 5));
