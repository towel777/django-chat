$(document).ready(function () {


    const chatSocket = new WebSocket('ws://localhost:8000/ws/chat/');

    chatSocket.onclose = function (ev) {
        console.log("webSocket close");
    }

    chatSocket.onmessage = function (ev) {
        console.log(JSON.parse(ev.data).message);
    }
    $('#button_send').on('click', function () {

        chatSocket.send(JSON.stringify({
                'message': 'test_message'
        }));

    });


});