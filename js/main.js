// const fetchUsers = async () =>
//     await (await fetch('/.netlify/functions/getusers')).json();



// fetchUsers().then( data => {
//     userList = document.querySelector('#users');

//     data.forEach( user => {
//         const li = document.createElement('li');
//         li.className = 'list-group-item';
//         const link = document.createElement('a');
//         link.appendChild(document.createTextNode(user.login));
//         link.href =user.html_url;
//         link.target  = '_blank';
//         li.appendChild(link);
//         userList.appendChild(li);
//     })
// });
const axios = require('axios');
document.getElementById("form").addEventListener("submit", onSubmit);

async function onSubmit(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

try {
    await axios.post(
        '/.netlify/functions/sendemail',
        {
            message : '<br>' + "Name : " + name +'<br>' + "Email : " + email +'<br>' + "Message : " + message, 
        }
    )
} catch (e) {
    console.error(e)
    alert("Your message could not be sent");
}
    
}