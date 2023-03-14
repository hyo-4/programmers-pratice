function solution(array, n) {
    let count = 0;
    for(let key in array){
        if(array[key] === n){
            count++;
        }
    }
    return count;
}