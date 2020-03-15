AbbrivatedString = (input) =>
{
  var wordsCollection = input.split(" ");
  return wordsCollection[0] + (wordsCollection[1]? " "+ wordsCollection[1][0]:"");
}