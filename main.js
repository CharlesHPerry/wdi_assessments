
const display = document.getElementById('display_num');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const inputText = document.getElementById('input_box');
var count = inputText.value;
var current_num = 0;

inputText.addEventListener('change', updateValue)
function updateValue(e) {
    count = e.target.value;
};

plus.addEventListener("click", function(event){
    event.preventDefault();
    current_num += parseInt(count);
    if(current_num >= 0) {
        display.classList.remove('red');
    }
    display.innerText = current_num;
});

minus.addEventListener('click', function(event){
    event.preventDefault();
    current_num -= parseInt(count);
    display.innerText = current_num;
    if(current_num < 0) {
        display.classList.add("red");
    }
});
display.innerText = current_num;
