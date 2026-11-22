-- exercise #4
SELECT      supplierId, 
            max(price) as max_supplier_price 
FROM        products
GROUP BY    supplierId
HAVING      max_supplier_price > 20;