CREATE TABLE chats (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
text TEXT,
author TEXT,
stamp TIMESTAMP);
CREATE TABLE people (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username TEXT,
password TEXT,
cookie TEXT,
lastseen TIMESTAMP,
signupdate DATE);
CREATE TABLE backuppeople (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username TEXT,
password TEXT,
cookie TEXT,
lastseen TIMESTAMP,
signupdate DATE);


