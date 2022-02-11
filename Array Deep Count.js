function deepCount(a){
    let count = 0; 
    const recurs = arr => {count += arr.length;
         for ( let i of arr ) {
              if ( Array.isArray(i) ){
                   recurs(i); }}}
     recurs(a);
      return count;

}
