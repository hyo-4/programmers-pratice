function solution(array) {
  let mid_num = Math.floor(array.length / 2);
  let rearray = array.sort((a, b) => a - b);
  return rearray[mid_num];
}