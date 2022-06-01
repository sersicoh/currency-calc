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

