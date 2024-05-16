-- MariaDB dump 10.19-11.1.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: certikke
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB-debug

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificados`
--

DROP TABLE IF EXISTS `certificados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `saldo` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificados`
--

LOCK TABLES `certificados` WRITE;
/*!40000 ALTER TABLE `certificados` DISABLE KEYS */;
INSERT INTO `certificados` VALUES
(1,'Pablo','Cuenca',50.6),
(2,'Elena','Jimenez',775.64),
(3,'John','Flores',304),
(4,'Juan','Pérez',1500),
(5,'María','González',2000),
(6,'Carlos','Martínez',1800),
(7,'Ana','Sánchez',2200),
(8,'Pedro','López',1600),
(9,'Laura','Rodríguez',1900),
(10,'Luis','Hernández',2300),
(11,'Sofía','Díaz',1750),
(12,'Miguel','Torres',2050),
(13,'Elena','Flores',2400),
(14,'Diego','Gómez',1950),
(15,'Paula','Cruz',1700),
(16,'Javier','Ruiz',2100),
(17,'Carmen','Morales',1850),
(18,'Roberto','Ortega',2250),
(19,'Isabel','Reyes',1650),
(20,'Raúl','Alvarez',2000),
(21,'Sara','Jiménez',2300),
(22,'Andrés','Núñez',1800),
(23,'Beatriz','Iglesias',2100),
(24,'Fernando','Vázquez',1950),
(25,'Rosa','Sanchez',2200),
(26,'Manuel','García',1750),
(27,'Eva','Martín',1900),
(28,'Adrián','Lorenzo',2400),
(29,'Lucía','Fernández',1700),
(30,'Jorge','Moreno',2050),
(31,'Pilar','Dominguez',2250),
(32,'Mario','Ramírez',1600),
(33,'Teresa','Vega',1800),
(34,'Antonio','Navarro',2150);
/*!40000 ALTER TABLE `certificados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 23:03:39
