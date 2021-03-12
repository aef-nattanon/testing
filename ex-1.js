let array = ['s', '1', '2', '3', '3', '0', '.', 'k', 'g', '-', 'm', 'S', '0', '1', '3', '3', '0', '-', 'k', 'g', '-', 'm', 's', '0', '0', '3', '3', '0', '-', 'k', 'g', '-', 'm'];

let stash = []


const isNumeric = (num) => {
  return !isNaN(num)
}
array.forEach(character => {
  if (isNumeric(character)) {
    stash.push(character)
  } else {
    console.log(stash.join(''));
    stash = []
  }
})
