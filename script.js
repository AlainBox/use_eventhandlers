// Part 1:
let button = document.getElementById("mybutton");

const alertMe = function(){
    alert("Button Clicked")
};

// Part 2(comment out to check part 3):
button.addEventListener("click", alertMe);

let buttonTwo = document.getElementById("bodyID");

const changeBackground = function(){
    bodyID.classList.add('red-background')
};

buttonTwo.addEventListener("click", changeBackground);

// Part 3:
let buttonTwo = document.getElementById("bodyID");

const toggleBackground = function(){
    bodyID.classList.toggle('red-background')
};

buttonTwo.addEventListener("click", toggleBackground);
