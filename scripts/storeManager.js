function saveUser(user){
    let oldUsers = readUsers();
    console.log(user); //this is an object
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);  //parse the object into a string
    console.log(val);  //this is a string
    localStorage.setItem("users",val);
}

function readUsers(){
    let users = localStorage.getItem("users");
    console.log(users);

    if(!users){  //not users?
        //here the LS is empty
        return [];  //creating the empty array
    }else{
        //if you get here the LS has users
        let listUsers = JSON.parse(users); //parse the users back into array
        console.log(listUsers);
        return listUsers;
    }
}