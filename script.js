let log=[{
    username:'Akash',
    password:'hello'
}]

function validate()
{
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    for(i=0;i<log.length;i++){
        if(username === log[i].username && password === log[i].password)
        {
            //window.location.assign("index2.html");
            window.open("index2.html", "_self");
            //alert("login successfull");
            return false
        }
        else{
            alert("login failed");
        }
    }
}