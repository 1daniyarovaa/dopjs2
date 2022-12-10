// let a=[1,2,3,4,5]
// function sredmass(){
//   if(a.reduce%5===0) {

//   }
// }
// console.log(sredmass(a));
function sredmass (numbers) {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  const length = numbers.length;
  return sum / length;
};

const numbers = [1, 2, 3, 4,5];
console.log(sredmass(numbers));