function login()
{
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
     
        if(username == "ankita" && password == "anku5034"){
            console.log(username + "is logged in!!!")
        }else{
            window.alert("Wrong username or password.")
        }
    }
    
    