CREATE DATABASE IF NOT EXISTS dbserver1;
USE dbserver1;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	bookid int PRIMARY KEY,
	title int,
    author varchar(48),
	yearPublished int,
    publisher varchar(48),
    pageCount int,
	msrp int
);

INSERT INTO books (bookid, title, author,yearPublished, publisher, pageCount, msrp) VALUES 
(1,'Afro-Vegan','Bryant Terry',2014,'Ten Speed Press',224,16.79),
(2,'Vegetarian India','Madhur Jaffrey',2015,'Knopf',48,37.50),
(3,'Plant-Based Air Fryer Cookbook','Janet Dockery',2021,'Rockridge Press',140,15.29),
(4,'Super Easy Plant-Based Cookbook','Kathy A. Davis',2021,'Rockridge Press',168,13.43),
(5,'The Plant Based Diet for Beginners','Gabriel Miller',2019,'Rockridge Press',168,13.66);

-- COMMIT;