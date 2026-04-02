function solution(id_list, report, k) {
    const uniqueReport = [...new Set(report)];
    
    // 신고당한 횟수 저장
    const reportCount = {};
    // 각 유저가 신고한 사람 목록 저장
    const reporterMap = {};
    
    for (let r of uniqueReport) {
        const [reporter, reported] = r.split(" ");
        reportCount[reported] = (reportCount[reported] || 0) + 1;
        if (!reporterMap[reporter]) reporterMap[reporter] = [];
        reporterMap[reporter].push(reported);
    }
    
    // k번 이상 신고당한 유저 찾기
    const banned = new Set();
    for (let [user, count] of Object.entries(reportCount)) {
        if (count >= k) banned.add(user);
    }
    
    // 메일 횟수 계산
    return id_list.map(user => {
        const reported = reporterMap[user] || [];
        return reported.filter(r => banned.has(r)).length;
    });
}