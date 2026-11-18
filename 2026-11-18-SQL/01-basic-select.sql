-- the basic form of SQL SELECT:
SELECT _what______ FROM __which table____;

-- select always returns a table

-- fetches all names from products
SELECT name FROM products;

-- fetches all prices from products
SELECT price FROM products;

-- fetches all corresponding names and prices from products
SELECT name, price FROM products;

-- fetches all names, prices and quantities
SELECT name, price, quantity FROM products;

-- fetches all columns from products;
SELECT * FROM products;

-- the fields in the select list define the columns of the
-- result set table

-- i can add literals and calculations to the result set
SELECT name, price, 18 FROM products;

-- i can decide the name of the column using the keyword AS
SELECT  name, 
        price, 
        18 AS vat 
FROM    products;

-- i can use literals in calculations
SELECT  name, 
        price AS net_price, 
        price * 1.18 AS price_including_vat -- this is also called a pseudo column
FROM    products;

-- 
SELECT firstName, lastName FROM employees;