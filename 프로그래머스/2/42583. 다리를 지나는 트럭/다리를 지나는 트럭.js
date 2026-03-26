function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0); // 다리 상태
    let bridgeWeight = 0; // 현재 다리 위 총 무게
    let time = 0;

    while (bridge.length > 0) {
        time++;

        // 1. 다리에서 트럭 하나 나감
        bridgeWeight -= bridge.shift();

        // 2. 다음 트럭 확인
        if (truck_weights.length > 0) {
            if (bridgeWeight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge.push(truck);
                bridgeWeight += truck;
            } else {
                bridge.push(0); // 못 올라가면 빈칸
            }
        }
    }

    return time;
}