btnSide4El = document.getElementById('btnSide4').addEventListener('click',function (n1,n2){
    n1 = Number(prompt("First number?"));
    n2 = Number(prompt("Second Number?"));
    let n3 = 1;

    if (n3 = n1 % n2 == 0){
        console.log(n3)

    }else{
        console.log("Sad, doesn't work");
        console.log(n3);
    }

})