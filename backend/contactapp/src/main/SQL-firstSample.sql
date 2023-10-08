CREATE DATABASE IF NOT EXISTS `contacts_app`;

USE `contacts_app`;

CREATE TABLE IF NOT EXISTS `contacts` (
	`id` bigint NOT NULL AUTO_INCREMENT,
    `full_name` varchar(100) DEFAULT NULL,
    `telephone` varchar(25) DEFAULT NULL,
    `notes` text,
    PRIMARY KEY (`id`)
) engine=InnoDB auto_increment=1 default charset=utf8mb4;

SELECT * FROM `contacts`;

INSERT INTO `contacts`
(`full_name`, `telephone`, `notes`)
VALUES
("Ivanov Ivan", "+7 123 456 87 99", "Note1"),
("Voronov Stepan", "+7 123 456 87 99", "Note2"),
("Sidorov Petr", "+7 123 456 87 99", "Note3"),
("Petrov Nikolay", "+7 123 456 87 99", "Note4"),
("Semenov Viktor", "+7 123 456 87 99", "Note5");