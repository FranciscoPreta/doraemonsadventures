
DROP DATABASE IF EXISTS DORAEMON_APP;
CREATE DATABASE DORAEMON_APP;
USE DORAEMON_APP;
DROP TABLE IF EXISTS user;
CREATE TABLE user (

    ID INTEGER AUTO_INCREMENT,
    NAME VARCHAR(100) UNIQUE,
    HP INTEGER,
    PLANET VARCHAR(100),
    ITEM VARCHAR(100),
    DORAYAKI INTEGER,
    PRIMARY KEY (ID)
);

INSERT INTO user (name, planet, hp, item, DORAYAKI) VALUES ('pudim', 'nobita', 30, 'item', 1);
INSERT INTO user (name, planet, hp, item, DORAYAKI) VALUES ('nozk', 'nobita', 30, 'item', 1);
INSERT INTO user (name, planet, hp, item, DORAYAKI) VALUES ('mariana', 'nobita', 30, 'item', 1);
INSERT INTO user (name, planet, hp, item, DORAYAKI) VALUES ('alvaro', 'nobita', 30, 'item', 1);
