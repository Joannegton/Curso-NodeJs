CREATE DATABASE IF NOT EXISTS sistema_reservas;
USE sistema_reservas;

-- Tabela de clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de mesas
CREATE TABLE mesas (
    numero INT AUTO_INCREMENT PRIMARY KEY,
    capacidade INT NOT NULL,
    status ENUM('disponivel', 'ocupada', 'desativada') DEFAULT 'disponivel'
);

-- Tabela de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    mesa_id INT NOT NULL,
    data_reserva DATE NOT NULL,
    hora_reserva TIME NOT NULL,
    status ENUM('ativa', 'cancelada', 'finalizada') DEFAULT 'ativa',
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (mesa_id) REFERENCES mesas(numero)
);

-- Inserindo dados na tabela de mesas
INSERT INTO mesas (capacidade) VALUES (2);
INSERT INTO mesas (capacidade) VALUES (2);
INSERT INTO mesas (capacidade) VALUES (2);
INSERT INTO mesas (capacidade) VALUES (2);
INSERT INTO mesas (capacidade) VALUES (2);
INSERT INTO mesas (capacidade) VALUES (4);
INSERT INTO mesas (capacidade) VALUES (4);
INSERT INTO mesas (capacidade) VALUES (4);
INSERT INTO mesas (capacidade) VALUES (6);
INSERT INTO mesas (capacidade) VALUES (6);
INSERT INTO mesas (capacidade) VALUES (8);
INSERT INTO mesas (capacidade) VALUES (10);
INSERT INTO mesas (capacidade) VALUES (10);


