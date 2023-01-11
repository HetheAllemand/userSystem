let studentName = ["Hethe" , "Gary" , "Jose" , "Will" , "John" , "Scott" , "Kevin" , "Brayan" , "Edgan" , "Sivisco"]
console.log(studentName);

function studentNameDisplay(){
    for(let i=0; i < studentName.length; i++){
    
    document.getElementById("studentName").innerHTML += studentName[i];
    }
}

studentNameDisplay();

let users = [
    {
        name:"Hethe",
        salary:1000
    },
    {
        name:"Gary",
        salary:2000
    },
    {
        name:"Jose",
        salary:3000
    },
    {
        name:"Will",
        salary:4000
    },
    {
        name:"John",
        salary:5000
    },
    {
        name:"Scott",
        salary:6000
    },
    {
        name:"Kevin",
        salary:7000
    },
    {
        name:"Brayan",
        salary:8000
    },
    {
        name:"Edgar",
        salary:9000
    },
    {
        name:"Sivisco",
        salary:10000
    }
]
console.log(users);

    function displayUsers(){
        let row = "";
        for(let i=0; i < users.length; i++){
            let user=users[i]
            
            row+=`  <tr>          
            <td scope="row">${user.name}</td>
            <td>${user.salary}</td>
        </tr>` 
    }
   document.getElementById("displayUsers").innerHTML = row
       // document.getElementById("displayUsers").innerHTML += studentName[i]

}
displayUsers();


    




    