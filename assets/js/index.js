let imgMenu = document.getElementById("imgMenu");
let menu = document.getElementById("menu");
let btnTodos = document.getElementById("btnTodos");
let btnMassas = document.getElementById("btnMassas");
let btnPizzas = document.getElementById("btnPizzas");
let btnCarnesPeixes = document.getElementById("btnCarnesPeixes");
let btnEntradas = document.getElementById("btnEntradas");
let btnSobremesas = document.getElementById("btnSobremesas");
let blocosPratos = document.getElementById("blocosPratos");
let pratoM1 = document.getElementById("pratoM1");
let pratoM2 = document.getElementById("pratoM2");
let pratoM3 = document.getElementById("pratoM3");
let pratoP1 = document.getElementById("pratoP1");
let pratoP2 = document.getElementById("pratoP2");
let pratoP3 = document.getElementById("pratoP3");
let pratoCP1 = document.getElementById("pratoCP1");
let pratoCP2 = document.getElementById("pratoCP2");
let pratoCP3 = document.getElementById("pratoCP3");
let pratoE1 = document.getElementById("pratoE1");
let pratoE2 = document.getElementById("pratoE2");
let pratoE3 = document.getElementById("pratoE3");
let pratoS1 = document.getElementById("pratoS1");
let pratoS2 = document.getElementById("pratoS2");
let pratoS3 = document.getElementById("pratoS3");
let setaEsquerda = document.getElementById("setaEsquerda");
let setaDireita = document.getElementById("setaDireita");
let oferta1 = document.getElementById("oferta1");
let oferta2 = document.getElementById("oferta2");
let oferta3 = document.getElementById("oferta3");
let nomeF = document.getElementById("nome");
let telefoneF = document.getElementById("telefone");
let pedidoF = document.getElementById("pedido");
let enviarPedido = document.getElementById("enviarPedido");
let resultadoForm = document.getElementById("resultadoForm");

imgMenu.addEventListener("click", () => {
    if (menu.className == "close") {
        menu.style.position = "fixed";
        menu.style.display = "flex";
        menu.style.flexFlow = "column nowrap";
        menu.style.top = "10%";
        menu.style.left = "24%";
        menu.className = "open";
    } else {
        menu.style.display = "none";
        menu.className = "close";
    }
});

btnTodos.addEventListener("click", () => {
    btnTodos.className = "btnsFilter on";
    btnMassas.className = "btnsFilter off";
    btnPizzas.className = "btnsFilter off";
    btnCarnesPeixes.className = "btnsFilter off";
    btnEntradas.className = "btnsFilter off";
    btnSobremesas.className = "btnsFilter off";

    pratoM1.style.display = "flex";
    pratoM2.style.display = "flex";
    pratoM3.style.display = "flex";
    pratoP1.style.display = "flex";
    pratoP2.style.display = "flex";
    pratoP3.style.display = "flex";
    pratoCP1.style.display = "flex";
    pratoCP2.style.display = "flex";
    pratoCP3.style.display = "flex";
    pratoE1.style.display = "flex";
    pratoE2.style.display = "flex";
    pratoE3.style.display = "flex";
    pratoS1.style.display = "flex";
    pratoS2.style.display = "flex";
    pratoS3.style.display = "flex";
});

btnMassas.addEventListener("click", () => {
    btnTodos.className = "btnsFilter off";
    btnMassas.className = "btnsFilter on";
    btnPizzas.className = "btnsFilter off";
    btnCarnesPeixes.className = "btnsFilter off";
    btnEntradas.className = "btnsFilter off";
    btnSobremesas.className = "btnsFilter off";

    pratoM1.style.display = "flex";
    pratoM2.style.display = "flex";
    pratoM3.style.display = "flex";
    pratoP1.style.display = "none";
    pratoP2.style.display = "none";
    pratoP3.style.display = "none";
    pratoCP1.style.display = "none";
    pratoCP2.style.display = "none";
    pratoCP3.style.display = "none";
    pratoE1.style.display = "none";
    pratoE2.style.display = "none";
    pratoE3.style.display = "none";
    pratoS1.style.display = "none";
    pratoS2.style.display = "none";
    pratoS3.style.display = "none";
});

btnPizzas.addEventListener("click", () => {
    btnTodos.className = "btnsFilter off";
    btnMassas.className = "btnsFilter off";
    btnPizzas.className = "btnsFilter on";
    btnCarnesPeixes.className = "btnsFilter off";
    btnEntradas.className = "btnsFilter off";
    btnSobremesas.className = "btnsFilter off";

    pratoM1.style.display = "none";
    pratoM2.style.display = "none";
    pratoM3.style.display = "none";
    pratoP1.style.display = "flex";
    pratoP2.style.display = "flex";
    pratoP3.style.display = "flex";
    pratoCP1.style.display = "none";
    pratoCP2.style.display = "none";
    pratoCP3.style.display = "none";
    pratoE1.style.display = "none";
    pratoE2.style.display = "none";
    pratoE3.style.display = "none";
    pratoS1.style.display = "none";
    pratoS2.style.display = "none";
    pratoS3.style.display = "none";
});

btnCarnesPeixes.addEventListener("click", () => {
    btnTodos.className = "btnsFilter off";
    btnMassas.className = "btnsFilter off";
    btnPizzas.className = "btnsFilter off";
    btnCarnesPeixes.className = "btnsFilter on";
    btnEntradas.className = "btnsFilter off";
    btnSobremesas.className = "btnsFilter off";

    pratoM1.style.display = "none";
    pratoM2.style.display = "none";
    pratoM3.style.display = "none";
    pratoP1.style.display = "none";
    pratoP2.style.display = "none";
    pratoP3.style.display = "none";
    pratoCP1.style.display = "flex";
    pratoCP2.style.display = "flex";
    pratoCP3.style.display = "flex";
    pratoE1.style.display = "none";
    pratoE2.style.display = "none";
    pratoE3.style.display = "none";
    pratoS1.style.display = "none";
    pratoS2.style.display = "none";
    pratoS3.style.display = "none";
});

btnEntradas.addEventListener("click", () => {
    btnTodos.className = "btnsFilter off";
    btnMassas.className = "btnsFilter off";
    btnPizzas.className = "btnsFilter off";
    btnCarnesPeixes.className = "btnsFilter off";
    btnEntradas.className = "btnsFilter on";
    btnSobremesas.className = "btnsFilter off";

    pratoM1.style.display = "none";
    pratoM2.style.display = "none";
    pratoM3.style.display = "none";
    pratoP1.style.display = "none";
    pratoP2.style.display = "none";
    pratoP3.style.display = "none";
    pratoCP1.style.display = "none";
    pratoCP2.style.display = "none";
    pratoCP3.style.display = "none";
    pratoE1.style.display = "flex";
    pratoE2.style.display = "flex";
    pratoE3.style.display = "flex";
    pratoS1.style.display = "none";
    pratoS2.style.display = "none";
    pratoS3.style.display = "none";
});

btnSobremesas.addEventListener("click", () => {
    btnTodos.className = "btnsFilter off";
    btnMassas.className = "btnsFilter off";
    btnPizzas.className = "btnsFilter off";
    btnCarnesPeixes.className = "btnsFilter off";
    btnEntradas.className = "btnsFilter off";
    btnSobremesas.className = "btnsFilter on";

    pratoM1.style.display = "none";
    pratoM2.style.display = "none";
    pratoM3.style.display = "none";
    pratoP1.style.display = "none";
    pratoP2.style.display = "none";
    pratoP3.style.display = "none";
    pratoCP1.style.display = "none";
    pratoCP2.style.display = "none";
    pratoCP3.style.display = "none";
    pratoE1.style.display = "none";
    pratoE2.style.display = "none";
    pratoE3.style.display = "none";
    pratoS1.style.display = "flex";
    pratoS2.style.display = "flex";
    pratoS3.style.display = "flex";
});

setaEsquerda.addEventListener("click", () => {
    if (oferta1.style.display == "flex") {
        oferta1.style.display = "none";
        oferta2.style.display = "none";
        oferta3.style.display = "flex";
    } else if (oferta2.style.display == "flex") {
        oferta1.style.display = "flex";
        oferta2.style.display = "none";
        oferta3.style.display = "none";
    } else {
        oferta1.style.display = "none";
        oferta2.style.display = "flex";
        oferta3.style.display = "none";
    }
});

setaDireita.addEventListener("click", () => {
    if (oferta1.style.display == "flex") {
        oferta1.style.display = "none";
        oferta2.style.display = "flex";
        oferta3.style.display = "none";
    } else if (oferta2.style.display == "flex") {
        oferta1.style.display = "none";
        oferta2.style.display = "none";
        oferta3.style.display = "flex";
    } else {
        oferta1.style.display = "flex";
        oferta2.style.display = "none";
        oferta3.style.display = "none";
    }
});

enviarPedido.addEventListener("click", () => {
    if (nomeF.value.length == 0 || telefoneF.value.length == 0 || pedidoF.value.length == 0) {
        resultadoForm.innerHTML = 
        `
            <p style="color: red">Algum dos campos acima não foram preenchidos!</p>
        `;
    } else {
        resultadoForm.innerHTML = 
        `
            <p style="color: green">Pedido enviado com sucesso!</p>
        `;
    }
});