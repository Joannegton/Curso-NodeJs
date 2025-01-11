# Exercício

## 1) Atualizar o host da conexão com o banco de dados MySQL

**Detalhes da conexão:**
- **Host:** tcp://0.tcp.sa.ngrok.io:10124 (ngrok tcp 3306)
- **Usuário:** root
- **Senha:** ''
- **Database:** sistema_veterinario

## 2) Listar tudo da tabela `pets`


## 3) Criar uma rota de atualização de um animal. Dica: escolher id do animal na resposta do exercício 2.

**Detalhes da rota:**
- **Método:** PUT
- **Rota:** /animais/:id
- **Tabela:** pets
- **Parâmetros:** nome, especie, raca, data_nascimento
- **Retorno:** animal atualizado
