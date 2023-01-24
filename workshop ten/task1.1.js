function validation(){

    var username = document.getElementById("uname").value 
    var password = document.getElementById("psw").value

    if (username=="task2.html"){
        alert("Username must be entered");
        return false;
    }
    else if(password==""){
        alert("Password must be entered");
        return false;
    }
    else if(password.length<5){
        alert("Password length must be more than five character.")
        return false;
    }
    else{
        alert("Logged in successfully!!!");
        return true;
    }
}