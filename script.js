const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const Increasebtn = document.getElementById("Increasebtn");
let count  = 0;

Increasebtn.onclick = function()
{
    count++;
    countlable.textContent = count;
}

decreasebtn.onclick = function()
{
    count--;
    countlable.textContent = count;
}

resetbtn.onclick = function()
{
    count = 0;
    countlable.textContent = count;
}