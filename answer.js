function describeValue(val) {
    let truthy = val ? 'truthy' : 'falsy';
    return `${typeof val} | ${truthy}`;
}

const getDayType = (day) => {
    inputDay = day.toLowerCase();
    switch (inputDay) {
        case 'friday':
        case 'saturday':
            return "Weekend";
            break;
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return "Working Day";
            break;
        default:
            return "Invalid day";
            break;
    }
}

const validateUsername = (username) => {
        if(username.length < 4)
        {
            return "Too Short";
        }
        else if(username.includes(" "))
        {
            return "No Space Allowed";
        }
        else if(username.toLowerCase().includes("admin"))
        {
            return "Reserved Word";
        }
        else
        {
            return "Available";
        }
    }

function getCngFare(dist, isNight = false , waitTime = 0) {
    let fare = dist <=2? 50 : 50 + ((dist - 2) * 15) + (waitTime * 2);
    return isNight ? (fare + (fare * (20/100)))  : fare; 
}

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