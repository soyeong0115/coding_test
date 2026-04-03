const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let input = [];
rl.on('line', (line) => input.push(line.trim()));
rl.on('close', () => {
    const arr = input.map(Number);
    const max = Math.max(...arr);
    console.log(max);
    console.log(arr.indexOf(max) + 1);
});