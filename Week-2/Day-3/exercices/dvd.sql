--1
SELECT * from language;
--2
SELECT title,description from film 
INNER JOIN language ON film.film_id = language.language_id;
--3
SELECT title,description,name from language
JOIN  film on language.language_id = film.film_id;

SELECT * from language;
--2
SELECT title,description from film 
INNER JOIN language ON film.film_id = language.language_id;
--3
SELECT title,description,name from language
JOIN  film on language.language_id = film.film_id

--4
create table new_film (id serial primary key , name varchar(50));   


insert into new_film (name) VALUES ('Vinom'),('Matrix')

SELECT * from new_film;

--5

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT,
    language_id INT,
    title VARCHAR(500),
    score INT,
    review_text TEXT,
    last_update DATE,
    FOREIGN KEY (film_id) REFERENCES new_film(film_id),
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(500),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (1, 1, 'Amazing Movie', 9, 'This movie was fantastic!'),
    (2, 2, 'Not Bad', 7, 'Enjoyed the movie, but it could have been better.');

DELETE FROM new_film WHERE id = 1;




UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2);


SELECT conname AS constraint_name, confrelid::regclass AS referenced_table
FROM pg_constraint
WHERE conrelid = 'customer'::regclass;

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT film.title, film.rental_rate
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;


SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%'
    AND actor.first_name = 'Penelope'
    AND actor.last_name = 'Monroe';

SELECT title
FROM film
WHERE length < 60
    AND rating = 'R';

SELECT film.title
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
    AND customer.last_name = 'Mahan'
    AND rental.rental_rate > 4.00
    AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT film.title
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
    AND customer.last_name = 'Mahan'
    AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
    AND film.replacement_cost = (
        SELECT MAX(replacement_cost)
        FROM film
    );