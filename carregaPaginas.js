async function incluirPagina(url) {
    const response = await fetch(url);
    const data = await response.text();
    document.getElementById("conteudo").innerHTML = data;
}