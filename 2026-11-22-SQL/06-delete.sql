-- basic delete
DELETE FROM roles
WHERE id = 4;

-- delete multiple rows
DELETE FROM roles
WHERE id >= 3;

-- delete entire table
DELETE FROM roles;
