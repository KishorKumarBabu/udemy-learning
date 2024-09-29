/* var houskeper1={
    name:"kishor",
    yearsOfExperiance:5,
    happywork:['bathroom','bedroom']
}
console.log(houskeper1.name) */
function BellBoy(name, age) {
  this.name = name;
  this.age = age;
  this.clean = function () {
    alert("cleaning is process");
  };
}
var bellboy1 = new BellBoy("kishor", 19);
console.log(bellboy1);
