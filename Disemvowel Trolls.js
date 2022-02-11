function disemvowel(str) {
  let strSplit = str.split("");

  let strVowel = str.match(/[aioue]/ig);

  let withoutVowel = [];

  for(let i = 0; i < strSplit.length; i++){
    if(strVowel.indexOf(strSplit[i]) === -1){
        withoutVowel.push(strSplit[i]);
    }
  };
    return withoutVowel.join("")
  }

