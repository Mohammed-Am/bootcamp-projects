INSERT INTO ithem (ithem_name , ithem_price) VALUES ('Small Desk', 100 ),('Large desk', 300),('Fan',80);
INSERT INTO customers (first_name,last_name ) VALUES ('Sandra', 'Jones' ),('Scott', 'Scott'),('Trevor','Green'),('Melanie','Johnson');
--3/1

select * from ithem;

--3/2
--i add in item-prix type moeny when i want to use condition not work i change type to numeric
ALTER TABLE ithem
ALTER COLUMN ithem_price
TYPE numeric;


select * from ithem where ithem_price > 80;

--3/3
select * from ithem where ithem_price < 300;

--3/4
select * from customers where last_name = 'Smith';
-- nothing in the field yet with this name

--3/5
select * from customers where last_name = 'Jones';

--3/6
select * from customers where first_name != 'Scott'

