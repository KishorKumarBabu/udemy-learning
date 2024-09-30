function anotherAddEventLisner(typeofEvent,callback){
    var eventthathapend={
        eventtype:"keypress",
        key:"p",
        duriaationofkeypress:2
    }
    if (eventthathapend.eventtype==typeofEvent){
        callback(eventthathapend)
    }
}
anotherAddEventLisner("keypress",function(event){
    console.log(event)
})