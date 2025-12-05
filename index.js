//Selecteer de class
const share = document.querySelector('.sharebutton');
const sharepopup = document.querySelector('.popup');

//Voeg een click functie toe
share.addEventListener('click', function() {
    //Controleer of het werkt
    console.log('it works')

   sharepopup.classList.toggle('yes'); 
})

