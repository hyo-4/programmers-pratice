function solution(n) {
    let answer = 1;
    let pizza = 6;
    while(pizza % n !==0){
        pizza = pizza +6;
        answer++;
    }
    return answer;
}