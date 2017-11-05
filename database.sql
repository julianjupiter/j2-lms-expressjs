CREATE DATABASE lms;
USE lms;
CREATE TABLE IF NOT EXISTS book (
	id BIGINT(20) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    published_in YEAR NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO book (title) VALUES 
('Java How To Program'), ('AngularJS in Action'),
('Design Patterns in PHP and Laravel'), ('Druapl 8 Development Cookbook'),
('Grid Layout in CSS'), ('Introducing Bootstrap 4');

SELECT * FROM book;

CREATE TABLE IF NOT EXISTS user (
	id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (username),
    PRIMARY KEY (id)
);

SELECT * FROM user;