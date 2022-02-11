function nicknameGenerator(name){
    if(name.length < 4 == true){
     return "Error: Name too short"
   }else if(/[^aioue]/ig.test(name[2]) == true){
       return name.slice(0,3)
   }  
   return name.slice(0,4)
  }