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


console.log(getDayType("friday"));
console.log(getDayType("saturday"));
console.log(getDayType("sunday"));
console.log(getDayType("monday"));
console.log(getDayType("tueSday"));
console.log(getDayType("wednesday"));
console.log(getDayType("thursday"));
console.log(getDayType("ungabunga"));