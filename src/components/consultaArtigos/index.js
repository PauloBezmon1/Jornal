import api from '../../services/api.js'

// faz uma promessaa que consultara os dados na api
async function ConsultarArtigos(categoria){
    
    if (sessionStorage.getItem(categoria) === null){
        // funciona como promise, pois garante que está fazendo a requisição
        sessionStorage.setItem(categoria,{})
        
        // pegar os artigos na api
        const resposta = await api.get(`api/1/news?apikey=pub_29424bb9527422e33ceeabae4e8d3eab16f58&country=br&image=1&full_content=1&category=${categoria}`)

        if (resposta.data.length !== 0) {
            // é necessario converter em json para armazenar na sessão
            const resposta_json = JSON.stringify(resposta.data.results)
            
            // armazena os artigos de determinado tópico em uma sessão local
            sessionStorage.setItem(categoria,resposta_json)
        }
    }

    return true
}

export default ConsultarArtigos