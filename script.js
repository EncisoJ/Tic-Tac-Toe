"use strict";

let turn = 1
let score
let wins
let mark = "X";
let usedPosition
let position = []


function placeMark(position) {
    if(document.getElementById(position).textContent == " "){
        if(mark == "X"){
            document.getElementById(position).textContent = 'X'
            mark = "O"
        }else{
            document.getElementById(position).textContent = 'O'
            mark = 'X'
        }
        turn++
        document.getElementById('turn').textContent = `Turn: ${turn}`
    }else{
        alert('You cannot do that!);
    }
}

function youWin(){
    a1 = document.getElementById('a1').textContent 
    a2 = document.getElementById('a2').textContent 
    a3 = document.getElementById('a3').textContent 
    b1 = document.getElementById('b1').textContent 
    b2 = document.getElementById('b2').textContent 
    b3 = document.getElementById('b3').textContent 
    c1 = document.getElementById('c1').textContent 
    c2 = document.getElementById('c2').textContent 
    c3 = document.getElementById('c3').textContent 

    if(a1, a2, a3 == 'X' || a1, b2, c3 == 'X' || c1, b2, a3 == 'X' || b1, b2, b3 == 'X' || c1, c2, c3 == 'X'){
        document.getElementsByClassName('head').textContent = 'X wins'
    }
    if(a1, a2, a3 == 'O' || a1, b2, c3 == 'O' || c1, b2, a3 == 'O' || b1, b2, b3 == 'O' || c1, c2, c3 == 'O'){
        document.getElementsByClassName('head').textContent = 'O'
    }
}


