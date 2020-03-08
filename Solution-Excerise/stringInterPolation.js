$$$ = (inputString) => 
{
   var wordsCollection = inputString.split(' ');
   var wordsCollection = wordsCollection.map(word=>
                                                    {  
                                                        var wordLength = word.length; 
                                                        if(word[0]=='{' && word[word.length-1]=='}') 
                                                            return eval(word.substring(1, word.length-1));
                                                        else
                                                           return word;
                                                    }
                                            );  
    return wordsCollection.join(' ');
}