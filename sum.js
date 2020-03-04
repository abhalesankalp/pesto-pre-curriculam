//sum of all numbers
function SumAll(countNumbers)
{
	sum = 0;
	if(countNumbers[0]<countNumbers[1])
	{
		var startInt = countNumbers[0];
		var endInt = countNumbers[1];
	}
	
	else
	{
		var startInt = countNumbers[1];
		var endInt = countNumbers[0];
	}
		
	for(var i = startInt; i <= endInt; i++)
    {
		sum += i;
	}	
	
   return sum;
  
}

//sum of fibs number 
var calculatedFibNumbers = {};
function SumFib(countNumbers)
{
	var sum = 0;
	var index = 1;
	var fibNumber = -2;
	while(fibNumber<countNumbers)
	{
		fibNumber = Fib([index]);
		if(fibNumber % 2 == 1)
		sum += fibNumber;
		index++;
	}
	
	return sum - fibNumber + 1;
}

function Fib(number)
	{
		if(number <= 1)
			return 1;
		if(calculatedFibNumbers[number])
			return calculatedFibNumbers[number];
		calculatedFibNumbers[number] = Fib(number - 1) + Fib(number - 2);
		return calculatedFibNumbers[number];
	}
	
//sum of prime numbers	
function SumOfPrimeNumbers(value) {
    var primes = Array(value).fill(true);
    var sum = 0;
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            sum+= i;
        }
    }

return sum;
}	