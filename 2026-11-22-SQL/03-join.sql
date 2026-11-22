-- if i want to include in my result set data from another table
-- and not UNION data, rather i want to expand my result set with 
-- data from another table, the only way i know up until now
-- is to use a sub-select:
SELECT  *,
        (SELECT  name
        FROM    products
        WHERE   id = productId) as product_name
FROM    `order-details` 
LIMIT   10;

-- the above query is super non-efficient, and to fetch
-- data from multiple tables, the SQL allows us to use JOIN
-- however, i must let the RDBMS know according to what
-- i want to join two tables, it will not rely on a FK-PK relation
-- automatically as most people assume
SELECT  firstName, 
        lastName, 
        name
FROM    employees
JOIN    countries

-- so how do we tell the RDBMS what to join on?
-- using the keyword ON
SELECT  firstName, 
        lastName, 
        name
FROM    employees
JOIN    countries
ON      employees.countryId = countries.id

-- in join queries, it is very common to give aliases to the tables
-- since i need to use them both in SELECT and in ON
SELECT  e.firstName AS firstName, 
        e.lastName AS lastName,
        c.name AS country
FROM    employees AS e
INNER JOIN    countries AS c
ON      e.countryId = c.id

-- we can join more than 2 tables
SELECT  p.name AS name,
        p.price AS price,
        p.stock AS stock,
        p.quantity AS quanity,
        c.name as category,
        s.companyName as supplier
FROM    products AS p
JOIN    categories AS c
ON      p.categoryId = c.id
JOIN    suppliers AS s
ON      p.supplierId = s.id

-- joins are meant to be made on FK/PK relations!!!!!!!!!!!!!
-- the following join is WRONG both logically and operationally
SELECT  e.firstName AS firstName, 
        e.lastName AS lastName,
        c.name AS name
FROM    employees AS e
JOIN    countries AS c
ON      e.id = c.id -- <- this is the wrong portion, a join on two fields 
-- with no FK/PK relation, and logically unrelated

-- inner join, this is the default join for MySQL
SELECT      e.firstName AS firstName, 
            e.lastName AS lastName,
            c.name AS name
FROM        employees AS e
INNER JOIN  countries AS c
ON          e.countryId = c.id

-- right join:
SELECT      e.firstName AS firstName, 
            e.lastName AS lastName,
            c.name AS country
FROM        employees AS e 
RIGHT JOIN  countries AS c
ON          e.countryId = c.id
ORDER BY    e.firstName

-- left join:
SELECT      p.name AS name,
            p.price AS price,
            p.stock AS stock,
            p.quantity AS quanity,
            c.name as category
FROM        products AS p
LEFT JOIN   categories AS c
ON          p.categoryId = c.id

-- outer join:
-- OUTER JOIN is not implemented in MySQL and yeilds an error! :
SELECT      p.name AS name,
            p.price AS price,
            p.stock AS stock,
            p.quantity AS quanity,
            c.name as category
FROM        products AS p
OUTER JOIN   categories AS c
ON          p.categoryId = c.id

-- how can we implement outer join in MySQL?
-- the trick is to do a LEFT JOIN UNION RIGHT JOIN
SELECT      p.name AS name,
            p.price AS price,
            p.stock AS stock,
            p.quantity AS quanity,
            c.name as category
FROM        products AS p
LEFT JOIN   categories AS c
ON          p.categoryId = c.id
UNION
SELECT      p.name AS name,
            p.price AS price,
            p.stock AS stock,
            p.quantity AS quanity,
            c.name as category
FROM        products AS p
RIGHT JOIN   categories AS c
ON          p.categoryId = c.id