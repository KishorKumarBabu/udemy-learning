var array=[]
i=0
 function fizzbizz(){
    i+=1
    if (i%3==0){
        array.push("Fizz")
        
    }
    else if (i%5==0){
        array.push("Bizz")
    }
    else if (i%3==0 && i%5==0){
        array.push("Fizz")
    }
    else{
        array.push(i)
    }
    console.log(array)
 }
 fizzbizz()
 fizzbizz()
 fizzbizz()
 fizzbizz()
 fizzbizz()
 fizzbizz()