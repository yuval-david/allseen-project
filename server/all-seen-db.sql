create database allseen_db;
use allseen_db;

create table users
(
userID int auto_increment,
fullName varchar(255),
email varchar(255),
username int,
password varchar(255),
primary key (userID)
);

create table calc_details
(
calcID int auto_increment,
courtid varchar(255),
judge varchar(255),
proceedinid varchar(255),
casetypeid varchar(255),
inian varchar(255),
acceptancedate datetime,
casestatusstartdate date,
Defense int,
Prosecution int,
Disability_Type varchar(255),
Physical_Disability boolean,
Mental_Disability boolean,
primary key (calcID)
);

INSERT INTO users
(fullName, email, username, password)
VALUES
("Moti Levy", "moti2@gmail.com", 450321, "123123"),
("Rinat Levy", "moti2@gmail.com", 350321, "123123"),
("Ami David", "moti2@gmail.com", 250321, "123123"),
("Liraz hadad", "liraz@gmail.com", 222222, "123123"),
("Moria Levy", "moria11@gmail.com", 120321, "123123");
