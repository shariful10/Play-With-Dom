document.getElementById('review-btn').addEventListener('click', function () {
    const myElement = document.getElementById('floatingTextarea2');
    const h5 = document.createElement('h5');
    h5.innerText = myElement.value;
    const parent = document.querySelector('#commnet-container');
    parent.appendChild(h5);
})