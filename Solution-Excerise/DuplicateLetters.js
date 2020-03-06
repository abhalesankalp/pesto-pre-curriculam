function DuplicateLetters(inputString)
{
	var ch, index, len, count;
	var countsOfEachChar = {};
	for (index = 0, len = inputString.length; index < len; ++index) {
		ch = inputString.charAt(index); 
		count = countsOfEachChar[ch];
		countsOfEachChar[ch] = count ? count + 1 : 1;
	}
	
	var letterCounts = Object.values(countsOfEachChar);
	return Math.max(...letterCounts)==1? false : Math.max(...letterCounts);
}