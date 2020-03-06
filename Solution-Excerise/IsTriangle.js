function IsTriangle(sideOne, sideTwo, sideThree)
{
 if(sideOne + sideTwo <= sideThree
    || sideTwo + sideThree <= sideOne
	|| sideOne + sideThree <= sideTwo
	)
	 return false;
	 
 else
     return true; 
}