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


//Selecteer de class
const share = document.querySelector('.sharebutton');
const sharepopup = document.querySelector('.popup');

//Voeg een click functie toe
share.addEventListener('click', function() {
    //Controleer of het werkt
    console.log('it works')

//Voeg een toggle toe
   sharepopup.classList.toggle('yes'); 
})

//selecteer de class

//voeg een click functie toe

//voeg een toggle toe
