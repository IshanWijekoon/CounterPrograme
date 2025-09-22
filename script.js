const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const Increasebtn = document.getElementById("Increasebtn");
const countlable = document.getElementById("countlable");
let count = 0;

// Function to animate counter changes
function updateCounterWithAnimation(newValue) {
    countlable.classList.add('updating');
    setTimeout(() => {
        countlable.textContent = newValue;
        countlable.classList.remove('updating');
    }, 150);
}

Increasebtn.onclick = function() {
    count++;
    updateCounterWithAnimation(count);
}

decreasebtn.onclick = function() {
    count--;
    updateCounterWithAnimation(count);
}

resetbtn.onclick = function() {
    count = 0;
    updateCounterWithAnimation(count);
}