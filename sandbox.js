function saveInfo(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // console.log(name,email,password)

    // localStorage.setItem("name",name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);

    let record = new Array();
    record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if(record.some((v)=>{
        return v.email == email;
    })){
        alert("Duplicate data");
    }
    else{
        record.push({
            "name": name,
            "email": email,
            "password": password
        })
    }

    localStorage.setItem("users", JSON.stringify(record));
    window.location.href = "login.html";
}


function loginUser(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let record = new Array();
    record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if(record.some((v)=>{
        return v.email == email  && v.password == password;
    })){
        alert("Login Successfull");
        let current_user = record.filter((v)=>{
            return v.email==email && v.password==password;
        })[0]

        localStorage.setItem("email", current_user.email);
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("password", current_user.password);

        window.location.href = "todo.html";
    }else{
        alert("Login Failed");

    // console.log("cusb")
    }
}

function logoutUser(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    window.location.href = "login.html";

}