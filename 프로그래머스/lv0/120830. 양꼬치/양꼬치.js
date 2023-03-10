function solution(n, k) {
    let answer = 0;
    answer = n*12000 + k*2000;
    if(n>=10){
        let count = parseInt(n/10);
        answer = answer - count * 2000;
    }
    return answer;
}