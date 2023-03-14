function solution(num_list) {
    let result = [0,0];
    for(let key in num_list){
        if(num_list[key] % 2 === 0){
            result[0]++;
        }else{
            result[1]++;
        }
    }
    return result;
}