const authService = require('../services/authService');

async function login(req, res) {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
        const usuario = await authService.login(email, senha);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { login }