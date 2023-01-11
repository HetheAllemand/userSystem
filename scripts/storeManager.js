function saveUser(user){
    console.log(user); //this is an object
    let val = JSON.stringify(user);  //parse the object into a string
    console.log(val);  //this is a string
    localStorage.setItem("users",val);
}