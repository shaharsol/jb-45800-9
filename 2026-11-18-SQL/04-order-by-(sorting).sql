-- order by is the sort directive
-- default is ASCENDING order
SELECT      name, price
FROM        products
ORDER BY    name;

-- i can control the direction of the sort using the 
-- words ASC and DESC
SELECT      name, price
FROM        products
ORDER BY    name DESC;

-- sorting inside a sorted group
SELECT      name, price
FROM        products
ORDER BY    price ASC, name ASC;

-- we can limit the size of the result set
-- lets say i want the 10 most expensive products
SELECT      name, price
FROM        products
ORDER BY    price DESC
LIMIT       10;

-- we can use offsets
-- this means: get me 2 items, after the first 4 (i.e. 5th and 6th according to order)
SELECT      name, price
FROM        products
ORDER BY    price DESC
LIMIT		4, 2;


