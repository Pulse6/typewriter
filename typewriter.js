const sentence = "hello there from lighthouse labs";


// let time = 1000
// for (let i = 0; i < sentence.length; i++) {
// setTimeout(() => {
//     process.stdout.write(sentence[i])
//   }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.
// }

let sleepTime = 0
for (let letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter)
  }, sleepTime += 50)
}