var inclemento = document.querySelector('#inclemento')
var select = document.querySelector('#opçoes')
var radio = document.querySelector('#radio')
var codificar = document.querySelector('#codificar')
var decodificar = document.querySelector('#decodificar')
var btn = document.querySelector('#btn')

select.addEventListener('change', function (event) {
    if (select.value == '1') {
        inclemento.style.display = 'flex'
    } else {
        inclemento.style.display = 'none'
    }
})


radio.addEventListener('click', function (event) {
    if (codificar.checked) {
        btn.innerHTML = `<input onclick "cod()" class="btnInput" id="btnCodificar" type="button" value="Codificar mensagem" >`
        document.querySelector('#btnCodificar').addEventListener('click', cod)

    } else if (decodificar.checked) {
        btn.innerHTML = `<input onclick "decod()" class="btnInput" id="btnDecodificar" type="button" value="Decodificar mensagem" onclick="decodificar()">`
        document.querySelector('#btnDecodificar').addEventListener('click', decod)
    }
})
var resultado = document.querySelector("#resultado")

function cod() {
    var insiraFrase = document.querySelector("#frase").value
    if (select.value == "2" && codificar.checked) {
        texto = insiraFrase
        resultado.value = btoa(texto)
    } else if (select.value == "1" && codificar.checked) {
        codificarCesar()
    }
}

function codificarCesar() {
    var insiraFrase = document.querySelector("#frase").value
    var qT = document.querySelector("#qT").value
    var texto = ""

    for (var i = 0; i < insiraFrase.length; i++) {
        var passo = parseInt(qT)
        var asciiNum = insiraFrase[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var qMod = asciiNum + passo
            if (qMod > 90) {
                qMod = qMod - 26
            }
            texto += String.fromCharCode(qMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var qMod = asciiNum + passo
            if (qMod > 122) {
                qMod = qMod - 26
            }
            texto += String.fromCharCode(qMod)
        } else {
            texto += insiraFrase[i]
        }
        resultado.value = texto
    }
}

function decod() {
    var insiraFrase = document.querySelector("#frase").value
    if (select.value == "2" && decodificar.checked) {
        texto = insiraFrase
        resultado.value = atob(texto)
    } else if (select.value == "1" && decodificar.checked) {
        decodeCesar()
    }
}

function decodeCesar() {
    var insiraFrase = document.querySelector("#frase").value
    var qT = document.querySelector("#qT").value
    var texto = ""
    for (var i = 0; i < insiraFrase.length; i++) {
        var passo = parseInt(qT)
        var asciiNum = insiraFrase[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var qMod = asciiNum - passo
            if (qMod < 65) {
                qMod = 26 + qMod
            }
            texto += String.fromCharCode(qMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var qMod = asciiNum - passo
            if (qMod < 97) {
                qMod = 26 + qMod
            }
            texto += String.fromCharCode(qMod)
        } else {
            texto += insiraFrase[i]
        }
    }
    resultado.value = texto
}