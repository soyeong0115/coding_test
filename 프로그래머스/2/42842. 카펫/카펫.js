function solution(brown, yellow) {
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            const width = yellow / i;
            const height = i;
            
            if ((width + 2) * (height + 2) === brown + yellow) {
                return [width + 2, height + 2];
            }
        }
    }
}