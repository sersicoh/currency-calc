{
    const form = document.querySelector(".js-form");
    const select = document.querySelector(".js-select");
    const tradeTypeSell = document.querySelector(".js-tradeTypeSell");
    const input = document.querySelector(".js-input");
    const EUR = 4.77;
    const USD = 4.2;
    let returned = document.querySelector(".js-returned");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let returnedValue;

        const selectValue = select.value;
        const inputValue = input.value;

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
}