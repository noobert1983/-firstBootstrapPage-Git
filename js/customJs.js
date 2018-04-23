let counter = document.getElementById("counter1").innerHTML;
let previous = document.getElementById("previous");
console.log(counter);
console.log(previous);


if(counter=1){
    previous.innerHTML = "pierwsza strona!!!";
    /*previous.style.display = "none";*/
}


/*else if(counter>1){
    previous.style.display = "block";
    if(counter=2){
        let slownie = "dwa"
        return slownie;
    }
    previous.innerHTML = slownie +" strona!!!";
}*/