

function confirmation(){
    let password = getElementById("password").value;
    let confirmp = getElementById("confirmp").value;
    if(password != confirmp){
        alert("Password do not match");
        return false;
    }
}