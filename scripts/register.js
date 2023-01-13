function User(firstname,lastname,age,gender,phone,payment,color,email,password){
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    this.email=email;
    this.password=password;
}

function validation(user){
    let valid = true;
    if(user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }
    return valid;
}

let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGender = $("#txtGender");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");
let inputEmail = $("#Email");
let inputPassword = $("Password");

function register(){
    let newUser=new User(inputFname.val(),inputLname.val(),inputAge.val(),inputGender.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
    if(validation(newUser)==true){
       saveUser(newUser); //this function is on the storeManager
       $("input").val(""); //this line clears all the inputs
    }  
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init;