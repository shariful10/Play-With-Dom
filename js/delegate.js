document.querySelector("div").addEventListener('click', function(e){
    console.log(e.target.tagName);
    console.log("clicked");
    if (e.target.tagName = "BUTTON"){
        console.log("All Button's");
    }
})