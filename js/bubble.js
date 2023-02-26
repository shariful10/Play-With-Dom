document.getElementById("grandparent").addEventListener("click", function () {
    console.log("grandparent clicked");
},);
document.getElementById("parent").addEventListener("click", function () {
    console.log("parent clicked");
},);
document.getElementById("child").addEventListener("click", function (e) {
    console.log("child clicked");
    e.stopPropagation();
},);