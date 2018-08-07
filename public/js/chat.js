var chatForm = document.forms.chatForm;
var socket = io();
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', function() {
  if (chatForm) {
    console.log('heello');
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      socket.emit('postMessage', {
        username: chatUsername.value,
        message: chatMessage.value
      });
      chatMessage.value = '';
      chatMessage.focus();
    });

    socket.on('updateMessages', function(data) {
      showMessage(data);
    });
  }
});

function showMessage(item) {
  var chatDisplay = document.querySelector('.chat-display');
  var newMessage = document.createElement('p');

  if (chatUsername.value == item.username) {
    console.log("hello");
    newMessage.className = 'bg-success chat-text';
  } else {
    console.log("hai");
    newMessage.className = 'bg-info text-warning chat-text';
  }
  newMessage.innerHTML = '<strong>' + item.username + '</strong>:' + item.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
