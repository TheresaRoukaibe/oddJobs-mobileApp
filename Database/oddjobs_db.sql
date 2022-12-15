-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2022 at 12:22 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oddjobs.db`
--
CREATE DATABASE IF NOT EXISTS `oddjobs.db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `oddjobs.db`;

-- --------------------------------------------------------

--
-- Table structure for table `applies_to`
--

DROP TABLE IF EXISTS `applies_to`;
CREATE TABLE `applies_to` (
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applies_to`
--

INSERT INTO `applies_to` (`user_id`, `job_id`) VALUES
(8, 6),
(9, 7);

-- --------------------------------------------------------

--
-- Table structure for table `hires`
--

DROP TABLE IF EXISTS `hires`;
CREATE TABLE `hires` (
  `user_id` int(11) NOT NULL,
  `user_hired_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hires`
--

INSERT INTO `hires` (`user_id`, `user_hired_id`, `job_id`) VALUES
(6, 8, 6),
(10, 9, 7);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `salary` int(11) NOT NULL,
  `age_requirement` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_from` date NOT NULL,
  `end_on` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `salary`, `age_requirement`, `location`, `description`, `start_from`, `end_on`, `user_id`) VALUES
(6, 'Car Washer', 50, 20, 'Batroun', 'I just need my car washed for a wedding. ', '2022-12-04', '2022-12-04', 6),
(7, 'English Student', 50, 18, 'Online', 'I want someone willing to write my english essay due 15 september about the renaissance. ', '2022-12-08', '2022-12-15', 10),
(8, 'Dog Sitter', 200, 25, 'Beirut', 'I want someone willing to stay with my dog on christmas eve. He is very friendly. ', '2022-12-24', '2022-12-25', 9);

-- --------------------------------------------------------

--
-- Table structure for table `saves`
--

DROP TABLE IF EXISTS `saves`;
CREATE TABLE `saves` (
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saves`
--

INSERT INTO `saves` (`user_id`, `job_id`) VALUES
(9, 7),
(10, 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `dob`, `address`, `gender`, `number`) VALUES
(6, 'Theresa Roukaibe', 'tearouk@gmail.com', '$2y$10$yZPO8Jz1.1iTcixudBn/MOaZQq.xEcQF4qqA3EpEx4cVDxmmHA/m.', '2002-08-17', 'Amchit', 'Female', '76354399'),
(8, 'John Doe', 'jDoe@gmail.com', 'HelloWorld', '1992-12-07', 'Ashrafieh Beirut', 'Male', '03123456'),
(9, 'Thalia Roukaibe', 'thalia@gmail.com', '$2y$10$GiHgA7Eu6ZCNL4tI.IQx/.frPBJK1uF6NZvNaUbSK79qkFgm4BE8y', '2005-12-15', 'Amchit', 'female', '76554124'),
(10, 'Sam Winchester', 'sam@gmail.com', '$2y$10$dvZKt0RFAlYSP6xDbOVPiuK0uTfBVBH6N7MSuk8lAR0ZRKcGbAH4C', '1997-09-23', 'Ashrafieh', 'male', '03245601'),
(11, 'Leia Skywalker', 'leia@gmail.com', '$2y$10$JwU45Pe70pptsglNts5hYusVWGi1WpSNJsFtqA9t/LtxhoN7v5Li2', '1997-03-05', 'Naboo', 'other', '09233156');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
