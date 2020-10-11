async function getNoticias() {
    let resposta = await fetch ("http://newsapi.org/v2/top-headlines?apiKey=f3cc6c8c530a4a9c814ab1807c454a18&country=br");

    let noticias = await resposta.json();
    console.log(noticias.articles);
}

getNoticias();