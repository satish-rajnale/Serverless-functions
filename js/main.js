const fetchUsers = async () =>
    await (await fetch('http://localhost:9000/getusers')).json();

fetchUsers().then( data => {
    userList = document.querySelector('#users');

    data.forEach( user => {
        const li = document.createElement('li');
    })
})