let power = (number, exponent) => {
        let i = 0; 
        var result = 1;
        while(i!= exponent){
            result = result * number;
            i++;
        }
   return result;
}

let sqRoot = (number) => {
    let i = 1;
    while(i<number/2)
    {
        if(i * i == number)
        return i;

        i++;
    }
}

let round = (number) => {
    return number - (number%10);
}