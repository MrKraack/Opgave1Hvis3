const btn1El = document.getElementById('btn1').addEventListener('click',startSide3Opgave);

function startSide3Opgave(){

let userInput = Number(prompt("How many rows for your pyramid?"));

printPyramid(userInput);


}

function printPyramid(n){
    //Create row down
    for (let i = 0; i < n+1; i++) {
        //Variable to hold pyramid
        var output = "";
        //Print the stars
        for (let k = 0; k < i; k++) {
            output += "*";
        }
        //print pyramid
        console.log(output);
        
    }
}