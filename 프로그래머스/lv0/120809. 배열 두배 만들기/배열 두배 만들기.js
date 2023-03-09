function solution(numbers) {
    var answer = [];
    for(key in numbers){
        answer[key] = numbers[key]*2;
    }
    return answer;
}