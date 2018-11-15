 for(var namber=1; namber<=100; namber++)
{   var k="";
   if (namber%3==0)
k+= "Fizz" ;
if(namber%5==0)
k+= "Buzz";
console.log(k || namber);
}
