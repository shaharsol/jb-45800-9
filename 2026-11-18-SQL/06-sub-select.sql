-- i want all products where price is bigger then the average price
-- sub select is a sub-query within another query
SELECT  *
FROM    products
WHERE   price > (SELECT  AVG(price) 
                FROM    products);


-- i want all order details with product name in the result set
SELECT  *,
        (SELECT  name
        FROM    products
        WHERE   id = productId) as product_name
FROM    `order-details`  

-- 
SELECT  AVG(LENGTH(subset.phone))
FROM    (SELECT  firstName, phone
        FROM    employees) AS subset
;



