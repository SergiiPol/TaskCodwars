function solution(number){

    const a = [];
    const b = [];

    for(let i = 0; i < number; i++){
        if( i %3 === 0){
            a.push(i)
           
        }else if(i %5 === 0){
            b.push(i)        
        }
    }
    let sum = a.concat(b)
               .sort(function compareNumeric(a, b) {
                    if (a > b) return 1;
                    if (a == b) return 0;
                    if (a < b) return -1; });
    
    let s = 0;
    for(let num of sum){
         s += num;
    //     if ( s > number - num)break;
    }
    console.log (s);
}

