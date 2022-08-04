-- create a table with the following columns:
CREATE TABLE products(
id INT NOT NULL, -- here not null means that this field has to be something and it cannot be null
name STRING,
price MONEY,
PRIMARY KEY(id)
)

-- insert data into the created table

INSERT INTO table_name
VALUES(1,"Pen", 4) -- this automatically insert the data to all the created columns one by one

-- if we want to selectively insert in some columns and make soe columns empty then we can use

INSERT INTO table_name(column1, column2) -- here we have three columns but we are inserting in only two of them
VALUES(2,"Notebook")

-- select or read
SELECT * FROM table_name -- selects everything from the table

SELECT name, price FROM table_name -- will only select and display name and price column from the database

-- select a row or search something in the database
SELECT * FROM table_name
WHERE id=1; -- property to search 
-- WHERE id>1 we can also use conditionals in our code to apply some more conditions

-- update
UPDATE table_name
SET column1=value1, column2= value2,.......
WHERE id=3

-- alter a table (add columns to the existing database). When new columns are added, their value is NULL
ALTER TABLE table_name
ADD column_name data_type

-- delete 
DELETE FROM table_name
WHERE property_name=value
-- it will delete the row with the cetrain value