-- create table students (id  SERIAL primary key,first_name TEXT NOT NULL,last_name TEXT NOT NULL ,birth_date date);


INSERT INTO students(first_name,last_name,birth_date) 
VALUES
	('Marc','Benichou','02/11/1998'),
	('Yoan','Cochen','03/12/2010'),
	('Lea','Benichou','02/07/1999'),
	('Amelia','Dux','07/04/1996'),
	('David','Grez','01/06/2003'),
	('Omar','Simpson','03/10/1980');

--selecting data
--1
select * from students;
--2 
select first_name , last_name from students;
--3-1
select first_name , last_name from students where id = 2;
--3-2
select first_name , last_name from students where last_name = 'Benichou'
and first_name = 'Marc';
--3-3
select first_name , last_name from students where last_name = 'Benichou'
OR first_name = 'Marc';
--3-4
select first_name from students where first_name like '%a%';
--3-5
select first_name from students where first_name like 'a%';
--3-6
select first_name from students where first_name like '%a';
--3-7

--3-8
select * from students where id = 1 AND id = 3;


--4
select * from students where birth_date >= '1/01/2000';

select first_name from students where first_name like '%a_';



	

			