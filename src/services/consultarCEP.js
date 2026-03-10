// Dica: Para pegar o parametro ?cep=123, você vai precisar quebrar a string da URL.
// O módulo 'url' (nativo) ajuda nisso, mas você pode fazer manual usando split se preferir.

const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');


//salvando a cidade e UF no registro com base no CEP informado.

async function consultarCEP(cep) {
    
    //
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok){
            throw new Error (`Erro no servidor: ${resposta.status}`);
        } 

        const dados = await resposta.json();

        if (dados.erro){
            // console.log???
            //return texto
            // throw new Error
            return null;
        }

        const dadosTratados = {
            cidade: dados.localidade,
            regiao: dados.regioes,
            estado: dados.estado,
            data_busca: new Date().toLocaleString()
        };
        
        return dadosTratados;

    } catch (erro) {

        console.log('consultarCEP erro:', erro.message);
        return null;

    }
}

module.exports = {consultarCEP};