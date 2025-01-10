CREATE DATABASE IF NOT EXISTS sistema_veterinario;
USE sistema_veterinario;

-- Tabela de usuários (donos de pets)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(15),
    endereco TEXT,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de pets
CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    especie ENUM('cão', 'gato', 'outro') NOT NULL,
    raca VARCHAR(50),
    data_nascimento DATE,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de clínicas veterinárias
CREATE TABLE clinicas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

-- Tabela de consultas
CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT NOT NULL,
    clinica_id INT NOT NULL,
    data_consulta DATETIME NOT NULL,
    descricao TEXT,
    status ENUM('agendada', 'concluida', 'cancelada') DEFAULT 'agendada',
    FOREIGN KEY (pet_id) REFERENCES pets(id),
    FOREIGN KEY (clinica_id) REFERENCES clinicas(id)
);
