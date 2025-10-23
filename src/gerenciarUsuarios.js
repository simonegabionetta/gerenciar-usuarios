const usuarios = ['matheus', 'marcos', 'lucar', 'joao']

//Criar funcção que retorne usuarios e exportar ela
function retornarUsuarios(){
   return usuarios;
}

function adicionarNovoUsuario(nome) {  // aqui nao precisa de return pq a const de fora pode ser usado dentro no caso usuarios
    usuarios.push(nome); // add final lista
}




module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}