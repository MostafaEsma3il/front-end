
function fn(x) {
    return x * x - 4 * x + 5;
}

console.log("-------")
for (i = 0; i <= 5; i++) {
    if (i != 5)
        console.log('|' + i+ ' |'+ fn(i) + ' |');
    else 
        console.log('|' + i+ ' |'+ fn(i) + '|');

}
console.log("-------")