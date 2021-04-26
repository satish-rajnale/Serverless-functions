const axios = require('axios');



exports.handler = function(event, context, callback){
    const {API_URL, API_CLIENT_ID,  API_CLIENT_SECRET} = process.env;


    const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

    //Send user response
    const send = (body) =>{
        callback(null, {
            statusCode : 200,
            body : JSON.stringify(body),
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            }
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