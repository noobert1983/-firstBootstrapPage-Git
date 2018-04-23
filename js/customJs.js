
window.onload = function() {
  previousSchow();
  /*doSomethingElse();*/
};

let counter = document.getElementById("counter").innerHTML;
let previous = document.getElementById("previous");
console.log(counter);
console.log(previous);

function previousSchow(){
    if(counter==1){
    previous.innerHTML = "pierwsza strona!!!";
    }else if(counter==2){
    previous.innerHTML = "druga strona!!!";
    }else{
        previous.innerHTML = "dupa";
    };
}


/*
function previousSchow(){
if(counter=1){
    previous.innerHTML = "pierwsza strona!!!";
    previous.style.display = "none";
}else if(counter=2){
    previous.innerHTML = "druga strona!!!";
}else{
    previous.innerHTML = "dupa z tego..."
}
};

*/






/*else if(counter>1){
    previous.style.display = "block";
    if(counter=2){
        let slownie = "dwa"
        return slownie;
    }
    previous.innerHTML = slownie +" strona!!!";
}*/
//
//function mnozenie(x,y){
//    let wynik = x*y;
//    return wynik;
//}
//        
/*console.log(mnozenie(10,2));*/
/*let hmm = mnozenie(12,3);
console.log(hmm);*/