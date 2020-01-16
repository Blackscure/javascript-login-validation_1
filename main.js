function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(name == '' || password =='' || email=='')
    {
        document.getElementById("eresult").innerHTML =" All field Required";
        return false;
    } 

    else if(name.length<4){
        document.getElementById("eresult").innerHTML ="Name Must me Atleast 4 char";
        return false;
    }

    else if(password.length<4){
        document.getElementById("eresult").innerHTML ="Pass Must me Atleast 4 char";
        return false;
    }
    else {
        return true;
    }
    }
