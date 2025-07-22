let string = "";
let memory = 0; // for M+ and M-
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.innerHTML;

        try {
            if (btnValue === "=") {
                string = eval(string).toString();
                document.querySelector("input").value = string;
            } 
            else if (btnValue === "C") {
                string = "";
                document.querySelector("input").value = string;
            } 
            else if (btnValue === "M+") {
                memory += parseFloat(document.querySelector("input").value) || 0;
            } 
            else if (btnValue === "M-") {
                memory -= parseFloat(document.querySelector("input").value) || 0;
            } 
            else {
                string += btnValue;
                document.querySelector("input").value = string;
            }
        } catch (error) {
            alert("Invalid Expression!");
            string = "";
            document.querySelector("input").value = "";
        }
    });
});
