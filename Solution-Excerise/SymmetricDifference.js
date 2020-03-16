function SymmetricDifference(arrayOne, arrayTwo)
{
    return arrayOne.filter(x=> !arrayTwo.includes(x)).concat(arrayTwo.filter(x=> !arrayOne.includes(x)));
}

function FalsyArray(array)
{
    return array.filter(x => x);
}


