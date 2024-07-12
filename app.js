function calcularIMC() {
    let nombre = document.getElementById('nombre').value.trim();
    let altura = parseInt(document.getElementById('altura').value, 10);
    let peso = parseFloat(document.getElementById('peso').value);

    if (nombre === "") {
        mostrarError("Por favor, ingresa tu nombre.");
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        mostrarError("Por favor, ingresa una altura válida en centímetros (sin decimales).");
        return;
    }

    if (isNaN(peso) || peso <= 0) {
        mostrarError("Por favor, ingresa un peso válido en kilogramos.");
        return;
    }

    let alturaEnMetros = altura / 100;
    let resultadoImc = peso / (alturaEnMetros * alturaEnMetros);
    let imcRedondeado = resultadoImc.toFixed(2);

    let categoria = categorizarIMC(resultadoImc);

    mostrarResultado(nombre, imcRedondeado, categoria);
}

function categorizarIMC(imc) {
    if (imc < 18.5) {
        return "bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "obesidad grado I";
    } else if (imc >= 35 && imc < 40) {
        return "obesidad grado II";
    } else {
        return "obesidad grado III";
    }
}

function mostrarResultado(nombre, imc, categoria) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Hola <span class="destacado">${nombre}</span>, tu IMC es <span class="destacado">${imc}</span>. Esto indica que tienes <span class="destacado">${categoria}</span>.`;
}

function mostrarError(mensaje) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<span style="color: red;">${mensaje}</span>`;
}

function limpiarResultado() {
    document.getElementById('resultado').innerHTML = '';
}

// Evitar entrada de decimales en el campo de altura
document.getElementById('altura').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
});