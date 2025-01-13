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


-- Tabela de consultas
CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT NOT NULL,
    clinica_id INT NOT NULL,
    data_consulta DATETIME NOT NULL,
    descricao TEXT,
    status ENUM('agendada', 'concluida', 'cancelada') DEFAULT 'agendada',
    FOREIGN KEY (pet_id) REFERENCES pets(id)
);

-- Inserindo dados na tabela 'usuarios'
INSERT INTO usuarios (nome, email, senha, telefone, endereco) VALUES
('João Silva', 'joao.silva@gmail.com', 'senha123', '11987654321', 'Rua das Flores, 123'),
('Maria Oliveira', 'maria.oliveira@gmail.com', 'senha456', '11976543210', 'Av. Brasil, 456'),
('Pedro Santos', 'pedro.santos@gmail.com', 'senha789', '11965432109', 'Praça Central, 789'),
('Ana Souza', 'ana.souza@gmail.com', 'senhaabc', '11954321098', 'Rua Bela Vista, 101'),
('Lucas Lima', 'lucas.lima@gmail.com', 'senha321', '11943210987', 'Av. Paulista, 202'),
('Juliana Almeida', 'juliana.almeida@gmail.com', 'senha654', '11932109876', 'Rua Aurora, 303'),
('Carla Pereira', 'carla.pereira@gmail.com', 'senha987', '11921098765', 'Av. Independência, 404'),
('Bruno Costa', 'bruno.costa@gmail.com', 'senhaxyz', '11910987654', 'Rua Harmonia, 505'),
('Fernanda Ramos', 'fernanda.ramos@gmail.com', 'senhaqwe', '11998765432', 'Av. Liberdade, 606'),
('Rafael Gomes', 'rafael.gomes@gmail.com', 'senhaasd', '11987654321', 'Rua Esperança, 707');

-- Inserindo dados na tabela 'pets'
INSERT INTO pets (nome, especie, raca, data_nascimento, usuario_id) VALUES
('Buddy', 'cão', 'Labrador', '2018-06-15', 1),
('Luna', 'gato', 'Siamês', '2020-02-10', 1),
('Rex', 'cão', 'Pastor Alemão', '2019-08-20', 2),
('Mia', 'gato', 'Persa', '2021-01-05', 3),
('Spike', 'cão', 'Bulldog', '2017-12-12', 4),
('Bella', 'gato', 'Maine Coon', '2020-09-17', 5),
('Thor', 'cão', 'Golden Retriever', '2016-03-08', 6),
('Simba', 'gato', 'Angorá', '2019-05-22', 7),
('Max', 'cão', 'Poodle', '2018-11-11', 8),
('Daisy', 'cão', 'Shih Tzu', '2021-07-30', 9),
('Charlie', 'cão', 'Beagle', '2020-04-14', 10),
('Molly', 'gato', 'Sphynx', '2022-03-01', 10);

-- Inserindo dados na tabela 'consultas'
INSERT INTO consultas (pet_id, data_consulta, descricao, status) VALUES
(1, '2024-01-10 10:00:00', 'Vacinação anual', 'concluida'),
(1, '2024-02-15 14:30:00', 'Consulta de rotina', 'agendada'),
(2, '2023-12-20 09:00:00', 'Tratamento de pulgas', 'concluida'),
(3, '2024-01-18 11:00:00', 'Exame de sangue', 'concluida'),
(4, '2024-02-22 15:00:00', 'Cirurgia de castração', 'agendada'),
(5, '2023-11-25 10:30:00', 'Consulta de rotina', 'concluida'),
(6, '2024-01-05 13:00:00', 'Vacinação contra raiva', 'concluida'),
(7, '2023-12-12 16:00:00', 'Limpeza de dentes', 'concluida'),
(8, '2024-01-08 14:00:00', 'Check-up geral', 'agendada'),
(9, '2024-01-12 09:30:00', 'Consulta dermatológica', 'concluida'),
(10, '2023-12-30 11:00:00', 'Consulta de rotina', 'concluida'),
(11, '2024-01-15 10:30:00', 'Vacinação anual', 'concluida'),
(12, '2024-02-05 15:30:00', 'Tratamento para vermes', 'agendada');

