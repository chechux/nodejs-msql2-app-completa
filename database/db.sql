DROP DATABASE IF EXISTS database_links;
CREATE DATABASE database_links CHARSET utf8mb4;
USE database_links;

CREATE TABLE user(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    fullname VARCHAR(30) NOT NULL
);

CREATE TABLE links(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    url VARCHAR(250) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    user_id INT UNSIGNED,
    created_at TIMESTAMP CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES user(id) 
);
