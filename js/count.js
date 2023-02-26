let value = 0;
function makePlus(){
    value += 1;
    document.getElementById('counter').innerText = value;
}
document.getElementById('green-btn').addEventListener('click', function(){
    makePlus();
})
function makeMinus(){
    value -= 1;
    document.getElementById('counter').innerText = value;
}