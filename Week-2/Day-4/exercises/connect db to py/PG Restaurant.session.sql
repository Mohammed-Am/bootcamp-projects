CREATE TABLE menu_items ( 
item_id serial primary key , 
item_name varchar(30) not null,
item_price smallint default 0
);

select * from menu_items