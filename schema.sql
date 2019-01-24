
DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    id INT NOT NULL
    auto_increment,
  product_name VARCHAR
    (100) NULL,
  department_name VARCHAR
    (100) NULL,
  price DECIMAL
    (10,2) NULL,
  stock_quantity smallint
    (11) NOT NULL,
  PRIMARY KEY
    (id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Health Potion", "Restorative", 3.05, 20);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Rope Of Teathering", "Item", 1.50, 55);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Sword", "Weapon", 5.00, 16);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Mana Potion", "Restorative", 2.29, 60);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Wizard Staff", "Weapon", 3.05, 20);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Belt Of Upholding", "Item", 0.99, 8);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Rouge Daggers", "Weapon", 4.68, 80);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Torcch", "Item", 1.45, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Antitoxin", "Restorative", 2.15, 25);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Tome of the Enders", "Weapon", 105.99, 3);