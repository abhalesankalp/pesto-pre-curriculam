DecodeRotX = (encodedString,number) =>
{
    var chars = Array.from(encodedString);
    var decodedWords =  chars.map(function(char){
        if(!/^[a-zA-Z0-9]*$/.test(char) )
         return char;
         var charCode = char.charCodeAt(0) - number;
         if(charCode < 65)
            return String.fromCharCode(90-charCode+1);
         else
            return String.fromCharCode(charCode);
   })
 return decodedWords.join("");
}