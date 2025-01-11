# Melhorias na Criação de Usuários e Segurança da API

## Hash de Senhas com bcryptjs

Para melhorar a segurança das senhas dos usuários, podemos utilizar a biblioteca `bcryptjs` para fazer o hash das senhas. Siga os passos abaixo para instalar e utilizar a biblioteca:

### Instalação do bcryptjs

```bash
npm install bcryptjs
```

```javascript
const bcrypt = require('bcryptjs');

const senha
const hashSenha = bcrypt.hashSync(senha, 10);
```

### Comparação de Senhas

```javascript
const senha = '123456';
const hashSenha = bcrypt.hashSync(senha, 10);

```	

Melhoria da API com Middlewares
Podemos melhorar nossa API utilizando middlewares. Um exemplo é a criação de um middleware de autenticação.

Exemplo de Middleware de Autenticação

function autenticar(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ mensagem: 'Acesso negado. Token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, 'seuSegredoAqui');
        req.usuario = decoded;
        next();
    } catch (erro) {
        res.status(400).json({ mensagem: 'Token inválido.' });
    }
}

Uso de Tokens com jsonwebtoken
Para melhorar ainda mais a segurança da nossa API, podemos utilizar tokens. A biblioteca jsonwebtoken é uma excelente opção para isso.

Instalação do jsonwebtoken
npm install jsonwebtoken

Utilização do jsonwebtoken

const jwt = require('jsonwebtoken');

const usuario = { id: 1, nome: 'João' };
const token = jwt.sign(usuario, 'seuSegredoAqui', { expiresIn: '1h' });

console.log(token);
