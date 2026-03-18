CREATE DATABASE SchoolMealDB;
GO

USE SchoolMealDB;
GO

CREATE TABLE roles (
    role_id INT IDENTITY(1,1) PRIMARY KEY,
    role_name NVARCHAR(50)
);

CREATE TABLE users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(100),
    password NVARCHAR(255),
    full_name NVARCHAR(150),
    role_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(role_id)
);

CREATE TABLE students (
    student_id INT IDENTITY(1,1) PRIMARY KEY,
    student_name NVARCHAR(150),
    class NVARCHAR(50),
    age INT
);

CREATE TABLE foods (
    food_id INT IDENTITY(1,1) PRIMARY KEY,
    food_name NVARCHAR(150),
    calories FLOAT,
    protein FLOAT,
    lipid FLOAT,
    carb FLOAT
);

CREATE TABLE ingredients (
    ingredient_id INT IDENTITY(1,1) PRIMARY KEY,
    ingredient_name NVARCHAR(150),
    unit NVARCHAR(50)
);

CREATE TABLE meal_menu (
    menu_id INT IDENTITY(1,1) PRIMARY KEY,
    menu_date DATE,
    note NVARCHAR(255)
);

CREATE TABLE menu_foods (
    id INT IDENTITY(1,1) PRIMARY KEY,
    menu_id INT,
    food_id INT,
    quantity FLOAT,
    FOREIGN KEY(menu_id) REFERENCES meal_menu(menu_id),
    FOREIGN KEY(food_id) REFERENCES foods(food_id)
);

CREATE TABLE inventory (
    inventory_id INT IDENTITY(1,1) PRIMARY KEY,
    ingredient_id INT,
    quantity FLOAT,
    FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE purchase_list (
    purchase_id INT IDENTITY(1,1) PRIMARY KEY,
    ingredient_id INT,
    required_quantity FLOAT,
    status NVARCHAR(50),
    FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id)
);

INSERT INTO roles VALUES
('Admin'),
('Staff');

INSERT INTO users VALUES
('admin','123456','Quản trị',1),
('staff','123456','Nhân viên',2);

INSERT INTO foods VALUES
(N'Cơm',130,2.4,0.2,28),
(N'Thịt gà',239,27,14,0),
(N'Rau cải',25,2.6,0.3,5);

INSERT INTO ingredients VALUES
(N'Gạo','kg'),
(N'Thịt gà','kg'),
(N'Rau cải','kg');

INSERT INTO menu_foods(menu_id,food_id,quantity)
VALUES
(1,1,0.2),
(1,2,0.1),
(1,3,0.08);

INSERT INTO meal_menu(menu_date,note)
VALUES('2026-03-20','menu test')

UPDATE ingredients
SET ingredient_name = N'Cơm'
WHERE ingredient_name = N'Gạo'

CREATE VIEW view_menu_list AS
SELECT 
m.menu_id,
m.menu_date,
f.food_name,
mf.quantity
FROM meal_menu m
JOIN menu_foods mf ON m.menu_id = mf.menu_id
JOIN foods f ON mf.food_id = f.food_id;

ALTER TABLE students
ADD menu_id INT
FOREIGN KEY(menu_id) REFERENCES meal_menu(menu_id);

ALTER VIEW view_total_nutrition AS
SELECT
m.menu_id,
SUM(f.calories * mf.quantity) AS total_calories,
SUM(f.protein * mf.quantity) AS total_protein,
SUM(f.lipid * mf.quantity) AS total_lipid
FROM meal_menu m
JOIN menu_foods mf ON m.menu_id = mf.menu_id
JOIN foods f ON mf.food_id = f.food_id
GROUP BY m.menu_id;

CREATE VIEW view_nutrition_warning AS
SELECT *,
CASE 
WHEN total_calories < 600 THEN N'Thiếu calo'
ELSE N'Đủ'
END AS warning
FROM view_total_nutrition;

CREATE VIEW view_inventory_status AS
SELECT
i.inventory_id,
ing.ingredient_name,
i.quantity,
ing.unit
FROM inventory i
JOIN ingredients ing ON i.ingredient_id = ing.ingredient_id;


DROP VIEW view_purchase_list;
GO
CREATE VIEW view_purchase_list AS
SELECT 
    ing.ingredient_name,
    SUM(mf.quantity) * 500 AS required_quantity,
    ing.unit
FROM menu_foods mf
JOIN foods f ON mf.food_id = f.food_id
JOIN ingredients ing ON ing.ingredient_name = f.food_name
GROUP BY ing.ingredient_name, ing.unit;

SELECT * FROM view_menu_list

SELECT * FROM view_menu_list

SELECT * FROM view_inventory_status

SELECT * FROM view_purchase_list

