var $messages = $('.messages-content');
var serverResponse = "wala";


var suggession;
//speech reco
try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
}

$('#start-record-btn').on('click', function(e) {
  recognition.start();
});

recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
 document.getElementById("MSG").value= speechToText;
  //console.log(speechToText)
  insertMessage()
}


function listendom(no){
  console.log(no)
  //console.log(document.getElementById(no))
document.getElementById("MSG").value= no.innerHTML;
  insertMessage();
}

function updateScrollbar() {
  $('.msg-page').scrollTop($('.msg-page').height());
}



function insertMessage() {
  msg = $('.form-control').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('.msg-page').append('<div class="outgoing-chats"><div class="outgoing-chats-msg"><p>'+msg+'</p></div></div>');
  fetchmsg() 
  
  $('.form-control').val(null);
  updateScrollbar();

}

document.getElementById("mymsg").onsubmit =(e)=>{
  e.preventDefault() 
  insertMessage();
  
}

function serverMessage(response2) {


  if ($('.form-control').val() != '') {
    return false;
  }
  $('.msg-page').append('<div class="recieved-chats"><div class="recieved-chats-img"><img src="img.png"> </div><div class="recieved-msg"><div class="recieved-msg-inbox"><p>'+response2+'</p> </div></div></div>');
   updateScrollbar();
  


}


function fetchmsg(){

     var url = 'http://localhost:5000/send-msg';
      
      const data = new URLSearchParams();
      for (const pair of new FormData(document.getElementById("mymsg"))) {
          data.append(pair[0], pair[1]);
          console.log(pair)
      }
    
      console.log("abc",data)
        fetch(url, {
          method: 'POST',
          body:data
        }).then(res => res.json())
         .then(response => {
          console.log(response);
          serverMessage(response.Reply);
          speechSynthesis.speak( new SpeechSynthesisUtterance(response.Reply))
        
          
         })
          .catch(error => console.error('Error h:', error));

}


