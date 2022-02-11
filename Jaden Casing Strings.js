String.prototype.toJadenCase = function () {
  let split = this.split(/\s+/);
     let stringJadenCase = "";
     for(let i = 0; i < split.length; i++) {
      let input = split[i];
      let lower = input.toLowerCase();
      let firstLetter = lower.slice(0,1);
      let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
       stringJadenCase += capitalized + " " ;
 
   }
   return stringJadenCase.slice(0, -1) ;
 };