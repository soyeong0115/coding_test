function solution(s){  
    const pcount = (s.match(/p/gi) || []).length;
    const ycount = (s.match(/y/gi) || []).length;

    if (pcount == ycount) {
        return true;
    } else
        return false;
}