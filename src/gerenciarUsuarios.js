
//lista de objetos
const usuarios = [ 
        {
            nome: 'Matheus',
            email: 'ms.gmail.com'
        },

        {
            nome: 'Marcos',
            email: 'mas.gmail.com',
        },

        {
            nome: 'Lucas',
            email: 'ls.gmail.com',
        },

        {
            nome: 'Joao',
            email: 'js.gmail.com',
        }
];






//Criar funcção que retorne usuarios e exportar ela
function retornarUsuarios(){
   return usuarios;
   
}

function adicionarNovoUsuario(usuario) {  // aqui nao precisa de return pq a const de fora pode ser usado dentro no caso usuarios
    usuarios.push(usuario); // add final lista
}



module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}