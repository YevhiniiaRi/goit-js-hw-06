const input = document.getElementById("validation-input");
const datalength = Number(input.getAttribute("data-length"));



input.addEventListener("blur", (event) => {
    const valueLength = event.target.value.length;
    const isValid = valueLength === datalength;

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    
});
