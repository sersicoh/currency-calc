{
    const message = () => {
        console.log("Siema, ciężko mi określić czy zrobiłem refactor dobrze. Sugerując się poprzednią oceną zadania z tygodnia 4. poprawiłem też podobny kod w switchu, tzn. wyciągnąłem zwracaną wartość 'returned' poza switcha");
    }
    const calculateResult = (tradeTypeSell, selectValue, inputValue) => {

        let currencyCode;
        let returned;
        const EUR = 4.77;
        const USD = 4.2;

        if (tradeTypeSell.checked === true) {
            switch (selectValue) {
                case "EUR":
                    currencyCode = " €";
                    returnedValue = inputValue * EUR;
                    break;
                case "USD":
                    currencyCode = " $";
                    returnedValue = inputValue * USD;
                    break;
            }
        } else {
            switch (selectValue) {
                case "EUR":
                    currencyCode = " €";
                    returnedValue = inputValue / EUR;
                    break;
                case "USD":
                    currencyCode = " $";
                    returnedValue = inputValue / USD;
                    break;
            }
        }
        returned = (returnedValue.toFixed(2) + currencyCode).replace("\.", ",");
        return returned;
    }
    const update = (result) => {
        const returned = document.querySelector(".js-returned");
        returned.innerText = result;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const select = document.querySelector(".js-select");
        const tradeTypeSell = document.querySelector(".js-tradeTypeSell");
        const input = document.querySelector(".js-input");
        const result = calculateResult(tradeTypeSell, select.value, input.value);

        update(result);
    }
    const init = () => {

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }
    message();
    init();
}