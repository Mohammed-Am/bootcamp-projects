select * from  customer;

select (first_name , last_name) as full_name  from  customer;

select distinct create_date from customer ;

select * from customer order by first_name DESC;

select * from film;
select film_id, title,description,release_year,rental_rate from film order by rental_rate asc;

select * from address;
select address , phone from address where district = 'Texas';


select * from film;
select description from film where film_id between 15 and 150;


select  film_id, title, description, count(rental_rate) as count_rental_rate , rental_rate from film where exists (select favorite_movie from film ); 

--9?
select  film_id, title, description, count(rental_rate) as "length" , rental_rate from film  where  title like 'Vi%' group by film_id, title , rental_rate;


select  title , min(replacement_cost )  from film group by title limit 10;


select  title , min(replacement_cost )  from film group by title   limit 10 offset 10;


select * from customer;
select * from payment;

select first_name , last_name , amount , payment_date from customer 
inner join payment on customer.customer_id = payment.customer_id order BY customer.customer_id ASC;

select * from film
inner join inventory on film.film_id != inventory.film_id;

select * from city;
select * from country;

select * from city 
inner join country on city.city_id = country.country_id;

select customer.customer_id , (first_name , last_name) as "Names" , amount , payment_date  from customer
inner join payment on  customer.customer_id = payment.customer_id order by staff_id


























