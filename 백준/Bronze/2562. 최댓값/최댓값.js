const input = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .split('\n');

const arr = input.map(Number);

const max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max) + 1); // 1번부터 시작이라 +1!