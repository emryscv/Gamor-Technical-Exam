if(localStorage.getItem("theme") == "light"){
    document.getElementsByClassName("account-panel")[0].style.setProperty("border", "solid darkgray 1px");
    document.querySelectorAll("input").forEach(element =>{
        element.style.setProperty("border", "solid darkgray 1px");
    })
}

function login(e){
    if(localStorage.getItem("user-name") == e.srcElement[0].value && localStorage.getItem("pass") == e.srcElement[1].value){
        localStorage.setItem("loged", "t");
        console.log(localStorage.getItem("loged"));
    }
    else{
        alert("username and password does not match");
    }
    e.preventDefault();
}