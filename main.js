const form = document.getElementById("formNumeros");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const campoAinput = document.getElementById("numberA");
    const campoBinput = document.getElementById("numberB");

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Tente outra vez`;
    const mensagemVerdade = `Esta correto o número ${campoB} é maior que o número ${campoA}`;

    if (campoA >= campoB) {
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
    }
    else {
        const containerVerdade = document.querySelector('.mensagem-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
    }
});


