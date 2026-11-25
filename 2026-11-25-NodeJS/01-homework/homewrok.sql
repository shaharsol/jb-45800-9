-- #3
SELECT      o.id AS order_id,
            o.orderDate AS order_date,
            c.companyName AS customer,
            CONCAT(e.firstName, ' ', e.lastName) AS employee
FROM        customers AS c
JOIN        orders AS o
ON          c.id = o.customerId
JOIN        employees AS e
ON          e.id = o.employeeId
WHERE       YEAR(orderDate) = 1997
;

-- #2

SELECT      o.id AS order_id,
            o.orderDate AS order_date,
            c.id AS customerId,
            c.companyName AS customer
FROM        orders AS o  
RIGHT JOIN  customers AS c
ON          o.customerId = c.id
;