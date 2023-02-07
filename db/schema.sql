-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE category (
--   id INT NOT NULL AUTO_INCREMENT,
--   category_name VARCHAR(30)
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE product (
--   id INT NOT NULL AUTO_INCREMENT,
--   product_name VARCHAR(30) NOT NULL,
--   price DECIMAL NOT NULL,
--   stock INT NOT NULL DEFAULT 10,
--   category_id INT 
--   PRIMARY KEY (id)
-- );
-- CREATE TABLE tag (
--   id INT NOT NULL AUTO_INCREMENT,
--   tag_name VARCHAR(30),
--   PRIMARY KEY (id)
-- -- );
-- CREATE TABLE product_tag (
--   id INT NOT NULL AUTO_INCREMENT,
--   product_id INT,
--   tag_id INT,
--   PRIMARY KEY (id)
-- )