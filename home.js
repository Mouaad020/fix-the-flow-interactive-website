const search = document.querySelector('.button-chat');
const chatbot = document.querySelector('.aichatbot');

search.addEventListener('click', test) 
    function test (event){
    console.log('it works');
    event.preventDefault();

chatbot.classList.toggle('open');
    
};

