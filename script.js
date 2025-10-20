// Programa
window.document.addEventListener("DOMContentLoaded", function(){
    // Botão Letra Maiúscula
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toUpperCase()

    })
    // Botão Letra Minúscula
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toLowerCase()

    })
    // Botão primeira Letra Minúscula
    window.document.querySelector("#btnPrimeiraLetraMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        let modifiedText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        document.querySelector("#result").innerHTML = modifiedText;

    })
    // Botão Limpar
    window.document.querySelector("#limpar-button").addEventListener("click", function() {
        document.querySelector("#input-text").value = "";
        document.querySelector("#result").innerHTML = "";
    });

})