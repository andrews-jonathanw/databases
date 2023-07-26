CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  username CHAR(20)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname CHAR(20)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  message CHAR(255),
  username_id INT,
  roomname_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (username_id) REFERENCES users(id),
  FOREIGN KEY (roomname_id) REFERENCES rooms(id)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

