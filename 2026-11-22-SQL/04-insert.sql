-- basic insert
INSERT INTO countries 
VALUES (null, 'Paraguay');

INSERT INTO products
VALUES (null, 'Matza', 20, 20, 9, null, null, null);

-- if i don't want to code the entire list of values (assuming alot is null)
-- i can explicitly name the columns to which i want to assign values
INSERT INTO products (name, price, stock, categoryId)
VALUES ('Kneidalach', 10, 100, 9);

-- i cant insert new records if i don't assign values to unnullable columns
-- the following command will fail...
INSERT INTO products (price)
VALUES (100);

-- i can insert several records in one INSERT command
INSERT INTO products (name, price)
VALUES 
('almog', 100),
('aviv', 120),
('ofer', 140);

-- i can use a SELECT statement as input data for INSERT
INSERT INTO products (name, price)
SELECT  CONCAT(name, '-new'), price 
FROM    products