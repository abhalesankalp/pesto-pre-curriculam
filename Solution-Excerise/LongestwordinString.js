var LongestWord = (inputString) =>
{
    let maxLength = 0;
    let word = "";
    let wordsInString = inputString.split(" "); debugger;
    for(let index = 0; index<wordsInString.length; index++)
    {
        if(wordsInString[index].length > maxLength)
        {
            maxLength = wordsInString[index].length;
            word = wordsInString[index];
        }
    }
    
    return word;
}

