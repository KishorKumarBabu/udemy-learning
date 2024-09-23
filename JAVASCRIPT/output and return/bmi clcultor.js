function bmi(kg,m){
    var bmical=kg/(m**2)
    return Math.floor(bmical)
}
var bmical=bmi(65,1.8)
console.log(bmical)