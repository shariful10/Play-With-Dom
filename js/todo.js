let number = 0;
document.querySelector("#input-btn").addEventListener('click', function(){
    number += 1;
    const myInputValue = document.querySelector("#input-value").value;
    const parent = document.querySelector("#content-container");
    const tr = document.createElement("tr");
    tr.innerHTML =`
    <td>${number}</td>
    <td>${myInputValue}</td>
    <td>
    <button class="btn btn-danger deleteBtn">Delete</button>
    <button class="btn btn-primary">Done</button>
    </td>
    `;
    parent.appendChild(tr);
    document.querySelector("#input-value").value = "";

    const elements = document.querySelectorAll(".deleteBtn")
    for (const element of elements) {
        element.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = "none";
        })
    }
})

document.querySelector("#clear-btn").addEventListener('click', function(e){
    // console.log(e.target.parentNode);
    e.target.parentNode.style.display = "none";
})


