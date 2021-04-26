const client = require('@sendgrid/mail');

function sendEmail(client, message, senderEmail, senderName){
    return new Promise((fulfill, reject) => {
        const data ={
            from : {
                email : senderEmail,
                name : senderName,
                
            },
            subject : 'netlify function',
            to: "satishrajnale98@gmail.com",
            html : `New form submission<br/> ${message}`
        }

        client.send(data)
            .then(([response, body]) => {
                fulfill(response)
            })
            .catch(err => reject(err))
    })
}

exports.handler = function(event, context, callback){
    const {
        SENDGRID_API_KEY,
        SENDGRID_SENDER_EMAIL,
        SENDGRID_SENDER_NAME
    } = process.env;
 
    const body = JSON.parse(event.body);
    const message = body.message;

    client.setApiKey(SENDGRID_API_KEY);

    sendEmail(
        client,
        message,
        SENDGRID_SENDER_EMAIL,
        SENDGRID_SENDER_NAME
    ).then(response => callback(null, {
        statusCode : response.statusCode,
        body : JSON.stringify(response.body),
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
        }
    }))
    .catch(err => callback(err, null))

}