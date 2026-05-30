async function cargarComponente(id, archivo) {

    const response = await fetch(archivo);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {

    await cargarComponente(
        "navbar-container",
        "./components/navbar.html"
    );

    await cargarComponente(
        "footer-container",
        "./components/footer.html"
    );

});