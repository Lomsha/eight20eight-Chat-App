import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("Connected to ChatroomChannel");

    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
chatroom = document.getElementById('chatroom');

    $('#message-container').appendLine(data.mod_message)
    scroll_bottom()
    // 'message-container'.appendLine(data.mod_message)
    // Called when there's incoming data on the websocket for this channel
  
  }
  
});

// chatroomChannel.send(data.mod_message)
