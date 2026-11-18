-- aggregation functions do calculation on multi-rows
SELECT  AVG(price) AS average_price
FROM    products;

-- popular aggregation functions: AVG, MIN, MAX, SUM
SELECT  AVG(price) AS average_price,
        MIN(price) AS minimal_price,
        MAX(price) AS maximal_price,
        SUM(price) AS total_all_prices
FROM    products;

-- lets say i want to aggregate data just for supplierId=1
SELECT  AVG(price) AS average_price,
        MIN(price) AS minimal_price,
        MAX(price) AS maximal_price,
        SUM(price) AS total_all_prices
FROM    products
WHERE   supplierId = 1;

-- i can run the aggregation functions for specific groups
-- groups are result set rows with a common denominator
SELECT      supplierId,
            AVG(price) AS average_price,
            MIN(price) AS minimal_price,
            MAX(price) AS maximal_price,
            SUM(price) AS total_all_prices
FROM        products
GROUP BY    supplierId;

-- you cannot include unaggregated columns in a group by
-- query
SELECT      supplierId,
            name,
            AVG(price) AS average_price,
            MIN(price) AS minimal_price,
            MAX(price) AS maximal_price,
            SUM(price) AS total_all_prices
FROM        products
GROUP BY    supplierId;

-- sort a group by query
SELECT      supplierId,
            AVG(price) AS average_price,
            MIN(price) AS minimal_price,
            MAX(price) AS maximal_price,
            SUM(price) AS total_all_prices
FROM        products
GROUP BY    supplierId
ORDER BY    average_price DESC;

-- using where in a group by query
SELECT      supplierId,
            AVG(price) AS average_price,
            MIN(price) AS minimal_price,
            MAX(price) AS maximal_price,
            SUM(price) AS total_all_prices
FROM        products
WHERE       price > 30 -- this filters BEFORE the aggregation
GROUP BY    supplierId
ORDER BY    average_price DESC;

-- how to filter the aggregation result set
-- using the HAVING directive
SELECT      supplierId,
            AVG(price) AS average_price,
            MIN(price) AS minimal_price,
            MAX(price) AS maximal_price,
            SUM(price) AS total_all_prices
FROM        products
GROUP BY    supplierId
HAVING      average_price > 30
ORDER BY    average_price DESC;

-- in order-details table, calculate the average quantity of an order-detail
SELECT AVG(quantity) from `order-details`;

-- calculate the average quantity of a product order (use order-details table)
SELECT      productId, 
            AVG(quantity) AS average_quantity
FROM        `order-details`
GROUP BY    productId;

-- calculate the average quantity of a product order (use order-details table)
-- only where the average quanity > 20
SELECT      productId, 
            AVG(quantity) AS average_quantity
FROM        `order-details`
GROUP BY    productId
HAVING      average_quantity > 20;
