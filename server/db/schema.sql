-- Delete existing database
DROP DATABASE IF EXISTS events_db;
-- Create new database
CREATE DATABASE events_db;

-- Use newly created database
USE events_db;


-- Create Table 1 - Users
--  DROP TABLE IF EXISTS User;  -- Main database, shouldn't ever drop it
CREATE TABLE User (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
