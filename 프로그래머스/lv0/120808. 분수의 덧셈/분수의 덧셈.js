
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let top = numer1*denom2 + numer2*denom1;
    let bottom = denom2*denom1;
    let max = 1
    for(let i = 0; i<=top; i++){
        if(top%i === 0 && bottom%i === 0)
            max = i;
    }
    return [top/max, bottom/max];
}