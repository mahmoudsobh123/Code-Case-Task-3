let title = document.querySelector(".title")
var inp1 = document.querySelector("#inp1")
var inp2 = document.querySelector("#inp2")
var submit = document.querySelector(".submit")

let turn = "x";
let square =[];
function end (num1,num2,num3){
    title.innerHTML = `${square[num1]} winner`;
    document.getElementById("item"+num1).style.background = "#000";
    document.getElementById("item"+num2).style.background = "#000";
    document.getElementById("item"+num3).style.background = "#000";
    setInterval(function(){title.innerHTML += "."} , 1000);
    setTimeout(function(){
        localStorage.clear();
        location.reload()} , 4000);
}
function winner(){
    for( i =1 ; i<10 ; i++){
        square[i] = document.getElementById("item" + i).innerHTML ;
    }
    if(square[1] == square[2] && square[2] == square[3] && square[2] != ""){
        end(1,2,3); // ROW 1
    }
    else if(square[4] == square[5] && square[5] == square[6] && square[6] != ""){
        end(4,5,6); // ROW 2
    }
    else if(square[7] == square[8] && square[8] == square[9] && square[9] != ""){
        end(7,8,9); // ROW 3
    }
    else if(square[1] == square[4] && square[4] == square[7] && square[4] != ""){
        end(1,4,7); // COLUMN 1
    }
    else if(square[2] == square[5] && square[5] == square[8] && square[5] != ""){
        end(2,5,8); // COLUMN 2
    }
    else if(square[3] == square[6] && square[6] == square[9] && square[9] != ""){
        end(3,6,9); // COLUMN 3
    }
    else if(square[1] == square[5] && square[5] == square[9] && square[5] != ""){
        end(1,5,9); // CROSS 1
    }
    else if(square[3] == square[5] && square[5] == square[7] && square[5] != ""){
        end(3,5,7); // CROSS 2
    }
}
function game(id){
    let element = document.getElementById(id);
    if(turn ==="x" && element.innerHTML == ""){
        element.innerHTML = "x";
        turn = "o";
        title.innerHTML = "O";
    }
    else if(turn === "o" && element.innerHTML ==""){
        element.innerHTML = "o";
        turn = "x";
        title.innerHTML = "X";
    }
    winner()
}