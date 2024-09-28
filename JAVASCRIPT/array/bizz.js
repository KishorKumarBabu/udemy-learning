var array = [];
i = 0;
function fizzbizz() {
  while (i < 1000) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("FizzBizz");
    } else if (i % 5 == 0) {
      array.push("Bizz");
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else {
      array.push(i);
    }
    i++;
}
    console.log(array);
    
  
}
i = 1;
while (i < 1000) {
  fizzbizz();
  i++;
}
