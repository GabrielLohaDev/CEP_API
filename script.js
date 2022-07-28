const cep = document.getElementById('cep')


const preencherForm = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

const pesquisarCep = async() =>{
    const ncep = cep.value
    const url = `https://viacep.com.br/ws/${ncep}/json/`

    const dados = await fetch(url)
    const endereco = await dados.json()
    preencherForm(endereco)
}

cep.addEventListener('focusout', pesquisarCep)