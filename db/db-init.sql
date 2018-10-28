create database expressblog;
use expressblog;

create table posts(
id int auto_increment primary key,
title text not null,
content text not null,
createdAt datetime,
updatedAt datetime
);