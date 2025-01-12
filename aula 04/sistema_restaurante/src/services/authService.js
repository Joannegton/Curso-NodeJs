const conexao = require('../db')
const bcrypt = require('bcrypt')

async function login(email, senha) {
    const query = 'SELECT * FROM usuarios WHERE email = ?'
    const [usuario] = await conexao.query(query, [email])

    if (usuario.length === 0 ) {
        throw new Error('Usuário não encontrado')
    }

    const usuarioAutenticado = usuario
    const senhaCorreta = await bcrypt.compare(senha, usuarioAutenticado.senha)
    
    if (!senhaCorreta) {
        throw new Error('Senha incorreta')
    }

    return usuarioAutenticado
}

module.exports = {login}