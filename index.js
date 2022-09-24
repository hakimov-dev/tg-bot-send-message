const api = require('./api')

var chat_id = null
var bot_token = null
var message_title = ''

function checkMessage(TOKEN, CHAT, message){
    if(TOKEN !== undefined && TOKEN.length > 0 && CHAT !== undefined && CHAT.length > 0 && message !== undefined && message.length > 0){
        message_title = message.title || ''
        chat_id = CHAT
        bot_token = TOKEN
        delete message.title 
    }else{
        console.error('Added function params!')
    }
};

function createObj(){

}

async function sendMessage(TOKEN, CHAT, message){
    try{
      api.get(`bot${TOKEN}/sendMessage?chat_id=${CHAT}}&text=${message}`)
      .then(res => {
          console.log('Message successfully send.')
      })
      .catch(error => {
          console.log(error)
      })
    } catch(error){
      console.log(error)
    }  
}

module.exports = checkMessage