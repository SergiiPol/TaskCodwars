function absentVowel(x){
    let str = x.toLowerCase();
     
    if(str.indexOf('a') == -1){
       return 0;
    }
    else if(str.indexOf('e') == -1){
       return 1;
    }
    else if(str.indexOf('i') == -1){
       return 2;
    }
    else if(str.indexOf('o') == -1){
       return 3;
    }
    else if(str.indexOf('u') == -1){
       return 4;
    }
    else{
      return
    }
  }
  