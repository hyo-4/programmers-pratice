function solution(array) {
    
    let sortArray = array.sort((a,b)=>a-b);
    let mode = -1;//최빈값
    let modecount = 0;//최빈값 등장횟수
    let count = 0;//현재 array[i] 등장 횟수
    let prevalue = -1;//직전 숫자
    let bool = false;
    
    for(let i = 0; i<array.length; i++){
        if(prevalue !== array[i]){
            count = 1;
        }else{count++;}
        
        if(count === modecount){
            if(mode !== array[i]){
                bool = true;
            }
        }
        
        if(count > modecount){
            mode = array[i];
            modecount = count;
            bool = false;
        }
        
        prevalue = array[i];
        
    }
    
    if(bool)return -1;
    return mode;
}