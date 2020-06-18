
const display = document.getElementById('display_num');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const inputText = document.getElementById('input_box');
var count = 1;
var current_num = display.innerText

inputText.addEventListener('change', updateValue)
function updateValue(e) {
    count = e.target.value;
};

plus.addEventListener("click", function(event){
    event.preventDefault();
    current_num += count;
});

minus.addEventListener('click', function(event){
    event.preventDefault();
    current_num -= count;
});
