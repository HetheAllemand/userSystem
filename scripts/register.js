function User(firstname,lastname,age,gender,phone,payment,color){
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

let inputfName = document.getElementById("txtFName");
let inputlName = document.getElementById("txtlName");
let inputAge = document.getElementById("txtAge");
let inputGenger = document.getElementById("txtGender");
let inputPhone = document.getElementById("txtPhone");
let inputPayment = document.getElementById("txtPayment");
let inputColor = document.getElementById("txtColor");

function validate(theUser){
    let validation=true;
    inputfName.classList.remove("alert-error");
    inputlName.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputGender.classList.remove("alert-error");
    inputPayment.classList.remove("alert-error");

    if(theUser.fName==""){
        validation=false;
        inputfName.classList.add("alert-error");
    }
    if(theUser.lName==""){
        validation=false;
        inputlName.classList.add("alert-error");
    }
    if(theUser.Age==""){
        validation=false;
        inputAge.classList.add("alert-error");
    }
    if(theUser.Gender==""){
        validation=false;
        inputGender.classList.add("alert-error");
    }
    if(theUser.Payment==""){
        validation=false;
        inputPayment.classList.add("alert-error");
    }

    return validation;
}




function register(){
let inputFname = $("#txtFirstName").val();
let inputLname = $("#txtLastName").val();
let inputAge = $("#txtAge").val();
let inputGender = $("#txtGender").val();
let inputPhone = $("#txtPhone").val();
let inputPayment = $("#selPayment").val();
let inputColor = $("#selColor").val();

let newUser=new User(inputFname,inputLname,inputAge,inputGender,inputPhone,inputPayment,inputColor);
saveUser(newUser);
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init;