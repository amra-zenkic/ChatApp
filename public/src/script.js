window.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.getElementById('message-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');

  const serverUrl = 'http://192.168.0.19:3000'; // Replace with your server URL
  const socket = io(serverUrl);

  sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
      displayMessage(message, 'user');
      socket.emit('message', message);
      messageInput.value = '';
    }
  });

  socket.on('message', (data) => {
    const { message, senderId } = data;
    const isSelf = socket.id === senderId;
    if (!isSelf) {
      displayMessage(message, 'other');
    }
  });

  function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});
