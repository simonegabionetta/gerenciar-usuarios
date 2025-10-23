const {retornarUsuarios,adicionarNovoUsuario} = require ('../src/gerenciarUsuarios');
const { expect} = require ('chai');

describe('Testar as funçoes de Gestão de Usuário', function() {
    it('Validar que posso adicionar um novo nome de usuário na lista', function() {
        //1. Adicionar um novo nome na lista de usuários 
        adicionarNovoUsuario
        ({
            nome: 'Maria',
            email:'maria@gmail.com'
        });

        //2. Retornar a lisa de usuarios na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim na lista usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria'); //to equal compara valor
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');
        expect(listaDeUsuarios.at(-1)).to.eql({ //compara obj
            nome: 'Maria',
            email:'maria@gmail.com'
        });
      
        
    });

});
