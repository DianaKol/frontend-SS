let m = prompt('Введите  число');

function isEven (k){
    if (k<0)
    k=Math.abs(k);
if (k==0)
return console.log(" Данное число четное");

if (k==1)
return console.log("Данное число нечетное" );
else 

return isEven(k-2);

}
console.log(isEven(m));