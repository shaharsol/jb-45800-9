-- simple update
UPDATE  products
SET     price = price * 1.1,
        stock = stock + 10
;

-- update a specific row
UPDATE  products
SET     price = 3
WHERE   name = 'Chai';

-- update a specific group
UPDATE  products
SET     price = 3
WHERE   id < 20;
