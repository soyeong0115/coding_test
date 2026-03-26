function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        priority,
        index
    }));
    
    let count = 0;
    
    while (queue.length > 0) {
        let current = queue.shift();
        
        let hasHigher = queue.some(q => q.priority > current.priority);
        
        if (hasHigher) {
            queue.push(current);
        } else {
            count++;
            
            if (current.index === location) {
                return count;
            }
        }
    }
}