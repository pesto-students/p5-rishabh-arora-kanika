create database warehouse;

#Cities Table
CREATE TABLE Cities (
   Cities char(20)  primary key,
   State char(20)
);

#warehouse
CREATE TABLE warehouses (
 wid  int  primary key,
wname char(30),
location char(20), 
extraContext JSON,
CONSTRAINT locFkey FOREIGN KEY (location)
			REFERENCES cities(cities)
			ON DELETE CASCADE
);




#Customer Table
CREATE TABLE Customer (
cno  int primary key,
cname char(50),
addr varchar(50),
cu_city char(20)
);

#Orders Table
CREATE TABLE Orders (
ono  int primary key,
odate date,
cno int ,
CONSTRAINT onFkey FOREIGN KEY (cno)
			REFERENCES customer(cno)
	);
    

# Items table
CREATE TABLE Items (
itemno  int primary key,
description text,
weight decimal(5,2),
cost decimal(5,2)
);


#ItemsOrders
CREATE TABLE itemsOrders(
ono INT NOT NULL,
itemno INT NOT NULL,
FOREIGN KEY (itemno) REFERENCES Items(itemno),
FOREIGN KEY (ono) REFERENCES Orders(ono),
UNIQUE (itemno, ono)
);


#Stores Table
CREATE TABLE Stores (
Sid  int primary key,
StoreName char(20),
LocationCity char(20),
CONSTRAINT lockey FOREIGN KEY (LocationCity)
			REFERENCES cities(cities)
			ON DELETE CASCADE
);

ALTER TABLE stores ADD COLUMN wid INT ;

ALTER TABLE Stores
ADD 
FOREIGN KEY (wid) REFERENCES warehouses(wid) ON DELETE CASCADE; 



# StoreItem Table m:m relationship
CREATE TABLE storeItem(
Sid INT NOT NULL,
itemno INT NOT NULL,
FOREIGN KEY (sid) REFERENCES stores(sid),
FOREIGN KEY (itemno) REFERENCES Items(itemno),
UNIQUE (sid, itemno)
);

insert into cities values('Kochi','Kerala'),('Jaipur','Rajasthan');
insert into cities values('Amritsar','Punjab'),('Gurugram','Haryana');

insert into storeItem values (21,101),(21,102),(22,101);

insert into warehouses values(1,'wh1','kochi','{"floors": "1", "headName": "n1"}'),(2,'wh1','jaipur','{"floors": "2", "headName": "n2"}')	;
insert into warehouses values(3,'wh3','gurugram','{"floors": "1", "headName": "n3"}'),(4,'wh4','amritsar','{"floors": "2", "headName": "n4"}');	

insert into customer values(11,'cn1','addr1','Indore'),(12,'cn2','addr2','Pune')	;

insert into orders values(01,'2022-12-23',11),(02,'2022-11-14',12)	;

insert into items values (101,'notebook',20.14,100.43),(102,'books',30.14,150.43);
insert into stores values(21,'s1','Gurugram'),(22,'s2','Kochi');
insert into itemsOrders values (01,101),(01,102);


UPDATE stores
SET wid = 1
WHERE sid = 22;
insert into stores values(23,'s1','Kochi',1);

UPDATE stores
SET wid = 3
WHERE sid = 21;
insert into stores values(23,'s1','Kochi',1);

UPDATE stores
SET wid = 1
WHERE sid = 22;
insert into stores values(23,'s1','Kochi',1);



