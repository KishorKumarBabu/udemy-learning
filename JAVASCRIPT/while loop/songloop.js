function song(){
    i=100
    while(i>=0){
        if ( i ==0){
            console.log("no more bottle of beer on wall,no more bottle of beer, Go to store  and buy some more,99 bottle of beer on the wall")         
        
        }
        else if ( i==1){
            console.log(i +" bottle of beer on wall,"+ i +" bottle of beer, take 1 down , pass it arround, no more bottle of beer on the wall")
            }
        else {
            console.log(i +" bottle of beer on wall,"+ i +" bottle of beer, take 1 down , pass it arround "+ (i-1) +" bottle of beer on the wall")
        }
        i--
    }
    
}
song()