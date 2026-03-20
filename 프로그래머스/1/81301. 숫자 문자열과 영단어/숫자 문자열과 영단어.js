function solution(s) {
    const numbers = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];
    
    numbers.forEach((word, index) => {
        s = s.split(word).join(index);
    });
    
    return Number(s);
}