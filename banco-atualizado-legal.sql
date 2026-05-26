-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para exemplos
DROP DATABASE IF EXISTS `exemplos`;
CREATE DATABASE IF NOT EXISTS `exemplos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `exemplos`;

-- Copiando estrutura para tabela exemplos.alunos
DROP TABLE IF EXISTS `alunos`;
CREATE TABLE IF NOT EXISTS `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCompleto` varchar(100) NOT NULL,
  `dtNasc` date NOT NULL,
  `cpf` int(11) NOT NULL,
  `nomePai` varchar(100) NOT NULL,
  `nomeMae` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.alunos: ~0 rows (aproximadamente)
DELETE FROM `alunos`;

-- Copiando estrutura para tabela exemplos.materias
DROP TABLE IF EXISTS `materias`;
CREATE TABLE IF NOT EXISTS `materias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.materias: ~0 rows (aproximadamente)
DELETE FROM `materias`;

-- Copiando estrutura para tabela exemplos.pessoas
DROP TABLE IF EXISTS `pessoas`;
CREATE TABLE IF NOT EXISTS `pessoas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_razao_social` varchar(255) NOT NULL,
  `nome_social_fantasia` varchar(255) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` char(2) DEFAULT NULL,
  `pais` varchar(50) DEFAULT 'Brasil',
  `documento` varchar(14) NOT NULL,
  `tipo` enum('CPF','CNPJ') NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `documento` (`documento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.pessoas: ~1 rows (aproximadamente)
DELETE FROM `pessoas`;
INSERT INTO `pessoas` (`id`, `nome_razao_social`, `nome_social_fantasia`, `cep`, `endereco`, `numero`, `bairro`, `cidade`, `estado`, `pais`, `documento`, `tipo`, `email`, `data_cadastro`) VALUES
	(4, 'Jonas Burgo', 'Joena Lurrga', '98765432', 'rua dos Burgo', '897', 'Burgo nobre', 'Johanesburgo', 'Ga', 'Africa do Sul', '654987123', '', 'emaildoburgo@email.com', '2026-05-26 16:12:37');

-- Copiando estrutura para tabela exemplos.produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `estoque` int(11) NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.produtos: ~0 rows (aproximadamente)
DELETE FROM `produtos`;

-- Copiando estrutura para tabela exemplos.provas
DROP TABLE IF EXISTS `provas`;
CREATE TABLE IF NOT EXISTS `provas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_aluno` int(11) NOT NULL,
  `nota` decimal(20,6) NOT NULL,
  `id_materia` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_aluno` (`id_aluno`),
  KEY `id_materia` (`id_materia`),
  CONSTRAINT `FK_provas_materias` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.provas: ~0 rows (aproximadamente)
DELETE FROM `provas`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
