# ChatApp
 This app is a simple chat application that allows users to send and receive messages in real-time in local network. It provides a user-friendly interface where messages are displayed in a conversation-like format.
When a user opens the app, they are presented with a chat interface. The chat interface consists of a message container, where all the messages are displayed, and an input container at the bottom, which contains an input field to type messages and a send button.

To send a message, the user types their message in the input field and clicks the send button. The message is then displayed in the message container, indicating it was sent by the user. The message appears on the right side with a blue background color.

When other users send messages, they are also displayed in the message container. These messages appear on the left side with a light gray background color, distinguishing them from the user's messages.

The app uses Socket.IO, a real-time communication library, to establish a connection between the client and the server. It enables real-time messaging by allowing the server to broadcast messages to all connected clients, except the sender of the message.

The app provides a responsive design, adapting to different screen sizes and orientations. This ensures that users can comfortably use the app on various devices, including desktops, laptops, tablets, and smartphones.

Overall, this chat app provides a simple and intuitive user experience, allowing users to engage in real-time conversations with each other.
