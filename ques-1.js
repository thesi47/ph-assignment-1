function describeValue(val) {
    let truthy = val ? 'truthy' : 'falsy';
    return `${typeof val} | ${truthy}`;
}

console.log(describeValue(0)); // "number | falsy"
console.log(describeValue(1)); // "number | truthy"
console.log(describeValue('')); // "string | falsy"
console.log(describeValue('hello')); // "string | truthy"   
console.log(describeValue(null)); // "object | falsy"
console.log(describeValue(undefined)); // "undefined | falsy"