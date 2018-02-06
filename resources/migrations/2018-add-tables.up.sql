-- :name up-table-chats :! :n
-- :doc updates an existing user record

CREATE TABLE chats (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    text TEXT,
                    author TEXT,
                    stamp TIMESTAMP);

-- :name up-table-people :! :n
-- :doc updates an existing user record

CREATE TABLE people (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                     username TEXT,
                     password TEXT,
                     cookie TEXT,
                     lastseen TIMESTAMP,
                     signupdate DATE);
