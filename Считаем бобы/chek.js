let s = prompt('Введите строку');
let byk=prompt('Введите  букву');
function coutBs (slovo,d){
    let z=0;
let i =  slovo.length;
for( let f =0; f<i; f++){
    if (slovo[f]==d)
    z=z+1;
}
return z;
}
console.log(coutBs(s,byk));


