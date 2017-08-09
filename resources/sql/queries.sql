-- :name put-cookie-and-user :! :n
-- :doc creates a new user record
INSERT INTO people
(username, password, cookie, signupdate)
VALUES (:username, :password, :cookie, :signupdate)

-- :name put-cookie :! :n
-- :doc updates an existing user record
UPDATE people
SET cookie = :cookie
WHERE username = :username

-- :name put-ping :! :n
-- :doc updates an existing user record
UPDATE people
SET lastseen = :lastseen
WHERE cookie = :cookie

-- :name get-user :? :1
-- :doc retrieves a user record given the id
SELECT * FROM people
WHERE username = :username

-- :name get-user-with-id :? :1
-- :doc retrieves a user record given the id
SELECT * FROM people
WHERE id = :id

-- :name get-cookie :? :1
-- :doc retrieves a user record given the id
SELECT username, id FROM people
WHERE cookie = :cookie

-- :name put-chat :! :n
-- :doc creates a new user record
INSERT INTO chats
(text, author, stamp)
VALUES (:text, :author, :stamp)

-- :name get-chat :? :*
-- :doc retrieves a user record given the id
SELECT * FROM chats


-- :name get-last-chat :? :1
-- :doc retrieves a user record given the id
SELECT id FROM chats ORDER BY id DESC LIMIT 1

-- :name get-online-users :? :*
-- :doc retrieves a user record given the id
SELECT * FROM people WHERE lastseen >= now() - INTERVAL 1 MINUTE


