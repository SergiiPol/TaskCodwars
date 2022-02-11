function getMiddle(s){
    let str = s.length;
    
    if(str %2 == 0){
      return (s[s.length/2-1]+s[s.length/2]);
    }
    else if(str %2 == 1) {
     return (s[Math.ceil(s.length/2-1)]);
    }
  }
  