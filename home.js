const search = document.querySelector('.button-chat');
const chatbot = document.querySelector('.aichatbot');

search.addEventListener('click', test)
function test(event) {
    event.preventDefault();

    chatbot.classList.toggle('open');

};

const none = document.querySelector('.button-chat');

none.addEventListener('click', function () {

    if (document.querySelector('main header').classList.value == "") {

        document.querySelector('main header').classList.add('disappear');
    }
    else {
        document.querySelector('main header').classList.remove('disappear');
    }




});
