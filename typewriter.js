const sentence = "hi Bob how was your day?";
const typeOut = function(sentence){
let time = 50;
for (const char of sentence) {
  time += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time)
}
}
typeOut(sentence + "\n");
