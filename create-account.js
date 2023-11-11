function createAccount(e){
    localStorage.setItem("name", e.srcElement[0].value);
    localStorage.setItem("user-name", e.srcElement[1].value);
    localStorage.setItem("pass", e.srcElement[2].value);

    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("user-name"));
    console.log(localStorage.getItem("pass"));
    
    e.preventDefault();
}