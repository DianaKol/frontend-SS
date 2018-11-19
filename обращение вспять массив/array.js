let reverseArray = (array) =>{
    let arr=[];
    arr = array.reverse();
    return arr;
}
let reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let k = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = k;
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,4]));
console.log(reverseArray([1,2,3,4]));
