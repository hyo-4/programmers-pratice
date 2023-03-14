function solution(num_list) {
    let newnum = [];
    for(let key in num_list){
        newnum.unshift(num_list[key]);
    }
    return newnum;
}