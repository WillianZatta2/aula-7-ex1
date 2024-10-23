document.addEventListener('deviceready', onDeviceReady, false);


let resp = 0;

function generatorNumber() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    resp = num1 + num2
    document.getElementById('campo').value = ""
    document.getElementById("conta").textContent = `${num1} + ${num2} = `
    document.getElementById('botao').addEventListener('click', verifica);
}

function onDeviceReady() {
    generatorNumber()
}

function verifica() {
    var campo = document.getElementById('campo');
    try {
        var digitado = parseFloat(campo.value);
        if (digitado === resp) {
            navigator.notification.confirm(
                "Voce acertou",
                () => {
                    generatorNumber()
                },
                "Acertou",
                "Ok"
            )
        }
    } catch {
        console.log("Error --")
    }
}