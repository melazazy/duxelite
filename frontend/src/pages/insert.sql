-- First, disable foreign key checks to avoid constraint issues
SET FOREIGN_KEY_CHECKS = 0;

-- Clear existing data in the correct order
TRUNCATE TABLE trusts;
TRUNCATE TABLE requisitions;
TRUNCATE TABLE receivings;
TRUNCATE TABLE items;
TRUNCATE TABLE subcategories;
TRUNCATE TABLE categories;
TRUNCATE TABLE suppliers;
TRUNCATE TABLE departments;
TRUNCATE TABLE units;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;

-- Insert units
INSERT INTO units (name, created_at, updated_at) VALUES
('Piece', NOW(), NOW()),
('Kilogram', NOW(), NOW()),
('Liter', NOW(), NOW()),
('Box', NOW(), NOW()),
('Bottle', NOW(), NOW()),
('Pack', NOW(), NOW()),
('Can', NOW(), NOW()),
('Gram', NOW(), NOW());

-- Insert departments
INSERT INTO departments (name, created_at, updated_at) VALUES
('Bakery', NOW(), NOW()),
('Dairy', NOW(), NOW()),
('Produce', NOW(), NOW()),
('Meat', NOW(), NOW()),
('Beverages', NOW(), NOW()),
('Frozen Foods', NOW(), NOW()),
('Snacks', NOW(), NOW()),
('Canned Goods', NOW(), NOW()),
('Deli', NOW(), NOW()),
('Household', NOW(), NOW());

-- Insert categories
INSERT INTO categories (name, created_at, updated_at) VALUES
('Dairy Products', NOW(), NOW()),
('Bakery', NOW(), NOW()),
('Meat & Poultry', NOW(), NOW()),
('Fruits & Vegetables', NOW(), NOW()),
('Beverages', NOW(), NOW()),
('Snacks', NOW(), NOW()),
('Canned Goods', NOW(), NOW()),
('Frozen Foods', NOW(), NOW()),
('Household', NOW(), NOW()),
('Deli', NOW(), NOW());

-- Insert subcategories
INSERT INTO subcategories (name, category_id, created_at, updated_at) VALUES
-- Dairy subcategories
('Milk', 1, NOW(), NOW()),
('Cheese', 1, NOW(), NOW()),
('Yogurt', 1, NOW(), NOW()),
('Butter', 1, NOW(), NOW()),
-- Bakery subcategories
('Bread', 2, NOW(), NOW()),
('Pastries', 2, NOW(), NOW()),
('Cakes', 2, NOW(), NOW()),
-- Meat & Poultry subcategories
('Beef', 3, NOW(), NOW()),
('Chicken', 3, NOW(), NOW()),
('Pork', 3, NOW(), NOW()),
-- Fruits & Vegetables subcategories
('Fresh Fruits', 4, NOW(), NOW()),
('Fresh Vegetables', 4, NOW(), NOW()),
('Herbs', 4, NOW(), NOW()),
-- Beverages subcategories
('Water', 5, NOW(), NOW()),
('Juices', 5, NOW(), NOW()),
('Soft Drinks', 5, NOW(), NOW()),
('Tea & Coffee', 5, NOW(), NOW()),
-- Snacks subcategories
('Chips', 6, NOW(), NOW()),
('Cookies', 6, NOW(), NOW()),
('Nuts', 6, NOW(), NOW()),
-- Canned Goods subcategories
('Vegetables', 7, NOW(), NOW()),
('Fruits', 7, NOW(), NOW()),
('Soups', 7, NOW(), NOW()),
-- Frozen Foods subcategories
('Pizza', 8, NOW(), NOW()),
('Vegetables', 8, NOW(), NOW()),
('Ice Cream', 8, NOW(), NOW()),
-- Household subcategories
('Cleaning Supplies', 9, NOW(), NOW()),
('Paper Goods', 9, NOW(), NOW()),
-- Deli subcategories
('Cold Cuts', 10, NOW(), NOW()),
('Cheese', 10, NOW(), NOW()),
('Prepared Foods', 10, NOW(), NOW());

-- Insert suppliers
INSERT INTO suppliers (name, contact_info, created_at, updated_at) VALUES
('Fresh Farms Co.', 'contact@freshfarms.com', NOW(), NOW()),
('Dairy Delight', 'info@dairydelight.com', NOW(), NOW()),
('Golden Grains Bakery', 'sales@goldengrains.com', NOW(), NOW()),
('Prime Meats Inc.', 'orders@primemeats.com', NOW(), NOW()),
('Tropical Fruits Ltd.', 'sales@tropicalfruits.com', NOW(), NOW()),
('Beverage Masters', 'orders@beveragemasters.com', NOW(), NOW()),
('SnackTime Foods', 'info@snacktime.com', NOW(), NOW()),
('CanDo Foods', 'sales@candofoods.com', NOW(), NOW()),
('Frosty Delights', 'orders@frostydelights.com', NOW(), NOW()),
('Home Essentials', 'info@homeessentials.com', NOW(), NOW()),
('Deli Masters', 'orders@delimasters.com', NOW(), NOW()),
('Organic Harvest', 'sales@organicharvest.com', NOW(), NOW()),
('Pasta & More', 'info@pastamore.com', NOW(), NOW()),
('Seafood Express', 'orders@seafoodexpress.com', NOW(), NOW()),
('Spice World', 'sales@spiceworld.com', NOW(), NOW()),
('Sweets & Treats', 'orders@sweetstreats.com', NOW(), NOW()),
('The Cheese Cellar', 'info@cheesecellar.com', NOW(), NOW()),
('Veggie Land', 'sales@veggieland.com', NOW(), NOW()),
('Bakery Delights', 'orders@bakerydelights.com', NOW(), NOW()),
('Global Imports', 'info@globalimports.com', NOW(), NOW());

-- Insert receivings (200 records)
-- This is a sample pattern - in a real scenario, you would generate more varied data
INSERT INTO receivings (item_id, supplier_id, department_id, quantity, unit_price, received_at, receiving_number, tax, discount, created_at, updated_at, unit_id)
SELECT 
    i.id as item_id,
    FLOOR(1 + RAND() * 20) as supplier_id,  -- Random supplier from 1-20
    FLOOR(1 + RAND() * 10) as department_id, -- Random department from 1-10
    ROUND(10 + RAND() * 100, 2) as quantity,
    ROUND(0.5 + RAND() * 50, 2) as unit_price,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365) DAY) as received_at,
    CONCAT('RCV-', DATE_FORMAT(NOW(), '%Y%m'), '-', LPAD(n, 5, '0')) as receiving_number,
    ROUND((RAND() * 5), 2) as tax,
    ROUND((RAND() * 3), 2) as discount,
    NOW() as created_at,
    NOW() as updated_at,
    1 + FLOOR(RAND() * 8) as unit_id  -- Random unit from 1-8
FROM 
    (SELECT n FROM (SELECT 1 as n UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5) numbers) nums,
    (SELECT @row := 0) r
    JOIN items i
WHERE 
    (@row := @row + 1) <= 200;

-- Insert requisitions (300 records)
INSERT INTO requisitions (item_id, department_id, quantity, requested_by, status, created_at, updated_at, requisition_number, requested_date, unit_id)
SELECT 
    i.id as item_id,
    FLOOR(1 + RAND() * 10) as department_id,
    ROUND(1 + RAND() * 20, 2) as quantity,
    1 as requested_by,  -- Assuming user ID 1 exists
    ELT(1 + FLOOR(RAND() * 3), 'pending', 'approved', 'rejected') as status,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 30) DAY) as created_at,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 30) DAY) as updated_at,
    CONCAT('REQ-', DATE_FORMAT(NOW(), '%Y%m'), '-', LPAD(n, 5, '0')) as requisition_number,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 30) DAY) as requested_date,
    1 + FLOOR(RAND() * 8) as unit_id
FROM 
    (SELECT n FROM (SELECT 1 as n UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5) numbers) nums,
    (SELECT @row := 0) r
    JOIN items i
WHERE 
    (@row := @row + 1) <= 300;

-- Insert trusts (20 records for consumer items)
INSERT INTO trusts (item_id, department_id, quantity, requested_by, requisition_number, status, created_at, updated_at, requested_date)
SELECT 
    i.id as item_id,
    FLOOR(1 + RAND() * 10) as department_id,
    ROUND(1 + RAND() * 10, 2) as quantity,
    1 as requested_by,  -- Assuming user ID 1 exists
    CONCAT('TRUST-', DATE_FORMAT(NOW(), '%Y%m'), '-', LPAD(n, 5, '0')) as requisition_number,
    'completed' as status,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 60) DAY) as created_at,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 60) DAY) as updated_at,
    DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 60) DAY) as requested_date
FROM 
    (SELECT n FROM (SELECT 1 as n UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) numbers) nums,
    (SELECT @row := 0) r
    JOIN items i
WHERE 
    (@row := @row + 1) <= 20
ORDER BY RAND()
LIMIT 20;