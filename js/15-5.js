function ejemplo(params) {
    let inp =document.querySelector("#entrada");
    let p = document.querySelector("#salida");
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src=" ../img/caza.jpg" alt="error"/>';
    let valor = inp.value;
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(inp);
}