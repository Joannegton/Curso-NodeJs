const mesasService = require('../services/mesasService')


async function listarMesas(req, res){
    try {
        const mesas = await mesasService.listarMesas()
        res.status(200).json(mesas)
    } catch (error) {
        console.log('Erro ao buscar mesas', error)
        res.status(500).json({message: 'Erro ao buscar mesas'})
    }
}

async function atualizarStatusMesa(req, res){
    const numeroMesa = req.params.numero
    const status = req.body.status

    if(!numeroMesa){
        res.status(500).json({message: "Falta o parametro 'numero da mesa'"})
        return
    }

    try {
        await mesasService.atualizarStatusMesa(numeroMesa, status)
        res.status(200).json({message: 'Status da mesa atualizado com sucesso.'})
    } catch (error) {
        console.log('Erro ao atualiza status', error)
        res.status(500).json({message: 'Erro ao atualiza status'})
    }

}

module.exports = {listarMesas, atualizarStatusMesa}