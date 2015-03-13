
console.log("This program convert's entered km/h to knots");
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter km/h: ", function (input) {
    var knots = input * 0.5399568034557235;
    console.log("result in knots is:", knots.toFixed(2));
    rl.close();
});
