-- db 생성

create database mirimdb;
use mirimdb;

-- table 생성 (todotbl)
drop table if exists todotbl;

create table todotbl (
   id int auto_increment primary key, 
    contents varchar(20), 
    yesno varchar(3)
);

insert into todotbl values( null, '영화보기', 'no');
insert into todotbl values( null, '집에가기', 'no');
insert into todotbl values( null, '프젝하기', 'no');

select * from todotbl;
-- mysql ver5 필요없고 ver 8 일때 꼭 필요함
alter user 'root'@'localhost' identified with mysql_native_password by 'mirim2005';