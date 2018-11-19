
let range = (array, start, end ) => {
  let arr=[];
  arr= array.slice(start,end);
  array.push(end);
  return arr;
}

let sum = (array) =>
{
  let sum1 = 0;

    for (let value of array) {
      sum1 += value;
    }
     return sum1;
}
  console.log(sum([5,2,3,4]));
  console.log(range([2,3,4,5,6,7,8,9,10],0,5));