-- union allows me to combine result sets from various SELECT commands
SELECT  phone
FROM    employees
UNION
SELECT  phone
FROM    customers
UNION
SELECT  phone
FROM    suppliers
;

-- the RDBMS will not refuse a UNION query if the result set schema is similar
-- between the unioned SELECTs
-- even if there is completely no logical sense to combine those separate
-- sets of data as in the following exmaple:
SELECT  phone
FROM    employees
UNION
SELECT  address
FROM    customers
;

-- however, the RDBMS will surely refuse to UNION result sets with non similar
-- schemas. For example:
SELECT  cityId, countryId
FROM    employees
UNION
SELECT  address
FROM    customers
;

-- UNION does not tolerate non-unique values
SELECT  phone
FROM    employees -- 9 records
UNION
SELECT  phone
FROM    suppliers -- 29 records
;

-- if I insist to include non-unique values
-- i must state this using the ALL keyword
SELECT  phone
FROM    employees -- 9 records
UNION ALL
SELECT  phone
FROM    suppliers -- 29 records
;

