const apiKey = '875d4e9b'
const inputPesquisa = document.querySelector('form')

inputPesquisa.addEventListener("submit", function(event) {
    event.preventDefault()

    const pesquisa = event.target.pesquisa.value

    if (pesquisa == '') {
        alert('Digite algo para buscar!')
        return
    }

    try {
        fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
            .then(result => result.json())
            .then((json) => {
                if (json.Response === 'True'){
                    listaFilmes(json)
                } else {
                    alert('Nenhum filme econtrado')
                }
            })
    } catch (error) {
        console.log(error)
    }

    const listaFilmes = (json) => {
        const lista = document.querySelector('.lista')
        lista.innerHTML = ''

        json.Search.forEach(element => {
            let item = document.createElement('div')
            item.classList.add('item')

            item.innerHTML = `<h2>${element.Title}</h2><img src='${element.Poster}' />`

            lista.appendChild(item)
        })
    }
})