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
        salary:5000
    },
    {
        name:"Gary",
        salary:5000
    },
    {
        name:"Jose",
        salary:5000
    },
    {
        name:"Will",
        salary:5000
    },
    {
        name:"John",
        salary:5000
    },
    {
        name:"Scott",
        salary:5000
    },
    {
        name:"Kevin",
        salary:5000
    },
    {
        name:"Brayan",
        salary:5000
    },
    {
        name:"Edgar",
        salary:5000
    },
    {
        name:"Sivisco",
        salary:5000
    }
]
console.log(users);

    function displayUsers(){
        let row = "";
        for(let i=0; i < users.length; i++){
            
            row+=`            
            <td scope="row">${name.value}</td>
            <td>5000</td>
        </tr>` 
    }
   document.getElementById("displayUsers").innerHTML = row
       // document.getElementById("displayUsers").innerHTML += studentName[i]

}
displayUsers();


    




    