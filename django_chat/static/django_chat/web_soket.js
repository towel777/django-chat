$(document).ready(function () {

    const chatBlock = $('#chat_content');

    const chatSocket = new WebSocket('ws://localhost:8000/ws/chat/');

    chatSocket.onclose = function (ev) {
        console.log("webSocket close");
    }

    chatSocket.onmessage = function (ev) {
        chatBlock.append("<div class=\"media media-chat media-chat-reverse\">\n" +
            "                      <div class=\"media-body\">\n" +
            "                       <p>" + JSON.parse(ev.data).message +"</p> \n" +
            "                      </div>\n" +
            "                    </div>");
    }
    $('#button_send').on('click', function () {

        chatSocket.send(JSON.stringify({
                'message': 'test_message'
        }));

    });


});