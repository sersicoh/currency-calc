console.log(`Cześć, chciałem to zadanie zrobić trochę inaczej i pobierać dane dynamicznie ze strony nbp (api) bo udostępnia fajnego JSONa ale, poległem na braku znajomości asynchroniczności (od znajomego słyszałem o AJAXie, ale nie zgłębułem tematu). Mój problem polegał na tym, że odpowiedź z serwera nbp dostawałem ale już po załadowaniu całej strony i pełnym wykonaniu skryptu. Mam nadzieje, że w nastepnych lekcjach będzie coś o tym bo chciałbym wiedzieć jak to zrobić.\nDruga sprawa to zadeklarowane przeze mnie zmienne takie jak EUR czy USD, osobiście zamknąłbym to w Jsonie i odczytywał to co aktualnie przeliczam. Robię takie rzeczy na codzień w pracy ale nie ma to związku z wcześniej wspomnianym api. Nie zrobiłem tego ponieważ nie wiem jak dodać jsona na codepena, podejrzewam że jak wejdzie github to nie będzie problemu.`)
let form, select, input, returned, EUR, USD;

form = document.querySelector(".js-form");
select = document.querySelector(".js-select");
tradeTypeSell = document.querySelector(".js-tradeTypeSell");
input = document.querySelector(".js-input");
returned = document.querySelector(".js-returned");
EUR = 4.77;
USD = 4.2;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let selectValue, inputValue, returnedValue;

    selectValue = select.value;
    inputValue = input.value;

    if (tradeTypeSell.checked === true) {
        switch (selectValue) {
            case "EUR":
                returnedValue = inputValue * EUR;
                break;
            case "USD":
                returnedValue = inputValue * USD;
                break;
        }
        returned.innerText = returnedValue.toFixed(2).replace("\.", ",") + " zł";

    } else {
        switch (selectValue) {
            case "EUR":
                returnedValue = inputValue / EUR;
                returned.innerText = returnedValue.toFixed(2).replace("\.", ",") + " €";
                break;
            case "USD":
                returnedValue = inputValue / USD;
                returned.innerText = returnedValue.toFixed(2).replace("\.", ",") + " $";
                break;
        }
    }
})

