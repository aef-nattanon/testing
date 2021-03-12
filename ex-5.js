const n = 256;
let i = n;
let r = 0;
while (i >= 1) {
  let j;
  for (j = 1; j <= n; j++) {
    r += 1;
  }
  i = i / 2
}

console.log("r:", r)