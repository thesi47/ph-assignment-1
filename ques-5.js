const getChaseVerdict = (target, score, ballsLeft) => {
    let needed = target - score;
    let reqRate = (needed / ballsLeft) * 6;
    let situation = "";
        
        if (reqRate <= 6) {
            situation = "Comfortable";
        }
        else if (reqRate > 6 && reqRate <= 12) {
            situation = "Tough";
        }
        else{
            situation = "Almost Impossible";
        }
        let result = `Need ${needed} runs in ${ballsLeft} balls | ${situation}`;
    if (needed <= 0) {
        return "Won";
    }
    else if (ballsLeft <= 0) {
        return "Lost";
    }
    else
    { 
        return result;
    }

}
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
