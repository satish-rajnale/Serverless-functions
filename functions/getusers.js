const axios = require('axios');



exports.handler = function(event, context, callback){
    const API_URL = 'https://api.github.com/users'
    const API_CLIENT_ID =  "efacf249eaa1cb0ce7c5";
    const API_CLIENT_SECRET = "55ffa817809af2f871322e9c0feaf4a2131ab904";

    const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

    //Send user response
    const send = (body) =>{
        callback(null, {
            statusCode : 200,
            body : JSON.stringify(body) 
        })
    }

    //perform an api call
    const getUsers = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err))
    }

    // Make sure call is a GET
    if(event.httpMethod == "GET"){
        getUsers();
    }

    // const {name} = JSON.parse(event.body); 
    // callback(null, {
    //     statusCode : 200,
    //     body : JSON.stringify({ msg :"Hello "+ name }) 
    // })
}