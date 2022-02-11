
  function isIsogram(str){
    let  newStr = str.toLowerCase();
    let  strLowerCase = [... new Set(newStr)];
      if(strLowerCase.length === str.length || str.length === ""){
          return true ;
      }
          return false ;
}

