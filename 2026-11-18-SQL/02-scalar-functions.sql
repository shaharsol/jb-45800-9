-- this is how to get first and last name of all employees
SELECT firstName, lastName FROM employees;

-- fetch a result set with full names
SELECT  CONCAT(firstName, ' ', lastName) as full_name
FROM    employees;

-- fetch a result set with full names in lower case
SELECT LCASE(firstName), UCASE(lastName) FROM employees;

-- 
SELECT  LCASE(CONCAT(firstName, ' ', lastName)) as full_name
FROM    employees;

-- substring
SELECT  substring(firstName, 1, 3) as first_name_short 
FROM    employees;

-- one of the most useful scalar function is REPLACE
-- this is an example of slug generation
-- replace all spaces with dashes
-- and get rid of special characters
SELECT  REPLACE(REPLACE(LCASE(name), ' ', '-'), "'", "") as slug
FROM    products;

-- from employees table, display each employee name with the year they were hired


