function revrot(str, sz){
    if (sz < 1 || sz > str.length) 
      return "";

    let a =Math.trunc(str.length/sz)*sz

    let c = str.slice(0, a);

    const newArray = [];
  for (let i = 0; i < c.length; i += sz) {
    newArray.push(str.slice(i, i + sz));
  }
const s= [];
  let n = newArray
    .map(function(num){
        if(num.toString().split('').reduce((s,num)=>s+num**3,0)%2===0){
            let a = num.split('').reverse().join('');
             return s.push(a);
          }
       else {
            let b = num.slice(1)+num[0];
            return s.push(b);
         }
    })

 return s.join("");
 
 }

