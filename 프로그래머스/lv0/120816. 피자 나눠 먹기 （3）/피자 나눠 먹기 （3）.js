function solution(slice, n) {
    let answer = 1;
    let newslice = slice;
    while(newslice*answer <n){
        answer++;
    }
    return answer;
}