document.addEventListener("DOMContentLoaded", () => {

    const boton_modo = document.getElementById('btn-modo');
    const body = document.body;
    const titulo = document.querySelector('h1');
    let oscuro = localStorage.getItem("modoOscuro") === "true";

    if (oscuro) {
        body.style.backgroundColor = "rgb(34, 1, 34)";
        body.style.color = "white";
        if (titulo) titulo.style.color = "white";
    } else {
        body.style.backgroundColor = "#FFF9FF";
        body.style.color = "rgb(34, 1, 34)";
        if (titulo) titulo.style.color = "rgb(34, 1, 34)";
    }

    if (boton_modo) {
        boton_modo.addEventListener("click", cambiarModo);
    }

    function cambiarModo() {
        if (!oscuro) {
            body.style.backgroundColor = "rgb(34, 1, 34)";
            body.style.color = "white";
            if (titulo) titulo.style.color = "white";
            oscuro = true;
        } else {
            body.style.backgroundColor = "#FFF9FF";
            body.style.color = "rgb(34, 1, 34)";
            if (titulo) titulo.style.color = "rgb(34, 1, 34)";
            oscuro = false;
        }

        localStorage.setItem("modoOscuro", oscuro);
    }

});
