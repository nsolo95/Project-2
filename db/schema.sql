DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE chefs (
    
    id int auto_increment PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(50),
    passwords varchar(50)

);

CREATE TABLE kitchens (
    id int auto_increment PRIMARY KEY,
    cuisines varchar(30)
    );

CREATE TABLE dishes (
    id INT auto_increment PRIMARY KEY,
    dish varchar(45),
    recipes varchar(45),
    descriptions varchar(280),
    ingredients varchar (280),
    dish_picture_id varchar(60)
);


CREATE TABLE posts (
    id int auto_increment PRIMARY KEY,
    titles varchar(50),
    post_picture_id varchar(60),
    meal varchar(15),
    kitchen_id int, 
    FOREIGN KEY(kitchen_id) references kitchens(id),
    chef_id int,
     FOREIGN KEY(chef_id) references chefs(id),
    previous_post_id int,
     FOREIGN KEY(previous_post_id) references posts(id),
    dish_id int,
     FOREIGN KEY(dish_id) references dishes(id)
);

CREATE TABLE favorites(
    favorite_id int auto_increment PRIMARY KEY

);