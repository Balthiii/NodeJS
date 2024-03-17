-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 17 mars 2024 à 06:47
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `node`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `imageUrl`, `description`, `price`) VALUES
(29, 'Harry Potter à l\'école des sorciers', 'https://media.istockphoto.com/id/937221538/fr/vectoriel/livre-vintage-bleu-avec-signet.jpg?s=612x612&w=0&k=20&c=yovAMMB9yZwdRD5RDX9amNTjfeZ1-ibuzJvNad-6wx4=', 'Plongez dans le monde ensorcelant de Poudlard avec \"Harry Potter à l\'école des sorciers\" de J.K. Rowling. Suivez Harry, Ron et Hermione dans leurs aventures magiques alors qu\'ils découvrent le monde de la sorcellerie.', '19.99'),
(28, 'Le Seigneur des Anneaux', 'https://media.istockphoto.com/id/937221630/fr/vectoriel/livre-vintage-vert-avec-serrure.jpg?s=612x612&w=0&k=20&c=7T8WBifDv_KZ3DUcz9SOse7Lhdk7uqKJVwGL9jbqABY=', 'Plongez dans un monde d\'aventure épique et de magie avec \"Le Seigneur des Anneaux\" de J.R.R. Tolkien. Suivez Frodon Sacquet dans sa quête périlleuse pour détruire l\'Anneau Unique et sauver la Terre du Milieu du pouvoir maléfique de Sauron.', '14.50'),
(30, 'One Piece', 'https://media.istockphoto.com/id/505100812/fr/vectoriel/ferm%C3%A9-de-livre-avec-signet-et-bleu-couvre.jpg?s=612x612&w=0&k=20&c=b94nCs6SkiYCV1scIzIYceKR-Wk71n5yAPXVRQsrCYU=', 'One Piece raconte les aventures d\'une bande de pirates, menée par le capitaine Monkey D. Luffy et lancée à la recherche du trésor, nommé One Piece, du légendaire roi des pirates Gold Roger, mort sans avoir révélé l\'emplacement de son butin.', '6.99'),
(33, 'Orgueil et Préjugés', 'https://media.istockphoto.com/id/163860513/fr/vectoriel/vieux-livre-avec-signet.jpg?s=612x612&w=0&k=20&c=7KQldhszDTtTLs96uKV6eCc-K7vl2_Jo2JG9DRqUfXA=', 'L\'ouvrage est finalement publié en 1813, sous le titre Orgueil et Préjugés (en anglais : Pride and Prejudice). Situé en Angleterre au début du XIXᵉ siècle, le livre raconte l\'histoire de la famille Bennet et de leurs cinq filles', '18.99'),
(32, 'La Confusion des sentiments ', 'https://us.123rf.com/450wm/djvstock/djvstock2305/djvstock230514204/205199504-vieux-manuels-dans-une-biblioth%C3%A8que-isol%C3%A9e.jpg?ver=6', 'Nouvelle parue en 1927, La Confusion des sentiments raconte la relation entre un étudiant et son professeur, mélange d’admiration et de sentiment amoureux.', '22.50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
