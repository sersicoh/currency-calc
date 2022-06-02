{
    const message = () => {
        console.log("Siema, ciężko mi określić czy zrobiłem refactor dobrze. To gdzie i czy powinno zostać");
    }
    const calculateResult = (tradeTypeSell, selectValue, inputValue) => {

        let returnedTable = [];
        const EUR = 4.77;
        const USD = 4.2;
        if (tradeTypeSell.checked === true) {
            switch (selectValue) {
                case "EUR":
                    returnedTable.push(inputValue * EUR);
                    returnedTable.push(" zł");
                    return returnedTable;
                case "USD":
                    returnedTable.push(inputValue * USD);
                    returnedTable.push(" zł");
                    return returnedTable;
            }
        } else {
            switch (selectValue) {
                case "EUR":
                    returnedTable.push(inputValue / EUR);
                    returnedTable.push(" €");
                    return returnedTable;

                case "USD":
                    returnedTable.push(inputValue / USD);
                    returnedTable.push(" $");
                    return returnedTable;
            }
        }
    }
    const update = (result) =>{
        const returned = document.querySelector(".js-returned");
        returned.innerText = result[0].toFixed(2).replace("\.", ",") + result[1];
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