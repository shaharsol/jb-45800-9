-- where allows me to filter the result set
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price < 20;

-- where price equals 18
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price = 18;

-- where price is either lower than 20 or higher than 80
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price < 20
OR      price > 100;

-- where price is either lower than 20 or higher than 80 and quantity < 30
SELECT  name,
        price,
        stock
FROM    products
WHERE   (price < 20
OR      price > 100)
AND     stock < 30;

-- where price is either higher than 20 or lower than 80
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price >= 20
AND     price <= 80;

-- instead i can use the BETWEEN
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price BETWEEN 20 AND 80;

-- i can use a scalar function in the where
-- fetch all the products where price < 50 and name of the product
-- is no more than 8 characters long
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price < 50
AND     LENGTH(name) < 8;

-- text based search
-- fetch only products with "cha" in the name
SELECT  name,
        price,
        quantity
FROM    products
WHERE   price < 50
AND     name LIKE '%cha%';

-- filtering using NULL, using the words IS and IS NOT
SELECT  companyName
FROM    customers
WHERE   fax IS NOT NULL;


-- fetch all products that are missing from inventory
SELECT  *
FROM    products
WHERE   stock=0;

-- fetch all products whose name contains at least 2 words
SELECT  *
FROM    products
WHERE   name LIKE '% %';

-- or:
SELECT  *
FROM    products
WHERE   LOCATE(' ', name) > 0;

