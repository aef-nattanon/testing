let x = 1;
let i = 1;
while (x <= 1000) {
  x = Math.pow(2, x)
  i = i + 1
}
console.log('i: ', i)