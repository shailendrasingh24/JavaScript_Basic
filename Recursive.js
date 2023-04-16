 let counter = 0;
function Itration (){
    if(counter<5){
        return "Done"
    }
    counter++;
    console.log(counter)
    Itration();
}
Itration();