function displayUsers(usersArray){
    //travel the array (for loop)
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
        </tr>
        `;
        $("#users-table").append(tr);
    }

    //create the tmp

    //append() the tmp into the HTML table

}
function init(){
    console.log("Listing users...")
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;