--Create table for the menu
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
);

--Insert Main Dishes : 4-Taco orders
INSERT INTO menu_items (name, category, description, price) VALUES
    ('Tacos al Pastor', 'taco_order','Pork meat', 19.00),
    ('Tacos de Asada', 'taco_order','Beef meat', 15.00),
    ('Tacos de Cochinita', 'taco_order','Pork Yucatecan meat', 10.00),
    ('Tacos Campechanos', 'taco_order','Asada and Longaniza, or Suadero and Longaniza', 35.00),
    ('Tacos de Birria', 'taco_order','Beef in salsa meat', 20.00),
    ('Tacos de Suadero', 'taco_order','Beef meat', 15.00),
    ('Tacos de Longaniza', 'taco_order','I dunno', 14.00),
    ('Tacos Gobernador', 'taco_order','Shrimp and cheese', 15.00),
    ('Pollo Asado', 'taco_order','Grilled chicken0', 25.00),
    ('Tacos Dorados', 'taco_order','Fried Chicken tacos', 20.00),
    ('Tacos de Alambre', 'taco_order','Beef, pork, bell pepper, onion, mushrooms, and cheese',25.00);

--Insert Main Dishes: Individual Tacos
INSERT INTO menu_items (name, category, description, price) VALUES 
    ('Taco de Pastor', 'individual_taco', 'Pork Loin taco', 3.99),
    ('Taco de Asada','individual_taco', 'Beef meat taco', 2.99)
    ('Taco de Cochinita', 'individual_taco', 'Pork Yucatecan meat', 3.99),
    ('Taco Campechano', 'individual_taco','Asada and Longaniza, or Suadero and Longaniza', 4.99),
    ('Taco de Birria', 'individual_taco','Beef in salsa meat', 3.99),
    ('Taco de Suadero', 'individual_taco','Beef meat', 2.99),
    ('Taco de Longaniza', 'individual_taco', 'I dunno', 3.99),
    ('Taco Gobernador', 'individual_taco','Shrimp and cheese', 4.99),
    ('Pollo Asado', 'individual_taco','Grilled chicken', 4.99),
    ('Taco de Alambre', 'individual_taco','Beef, pork, bell pepper, onion, mushrooms, and cheese',4.99);

-- Insert Drinks

INSERT INTO menu_items (name, category, description, price) VALUES 
    ('Agua de Jamaica', 'drink', 'Natural infusion of hibiscus flower ', 4.99),
    ('Horchata', 'drink', 'Rice and natural sweeteners', 4.99),
    ('Tamarindo', 'drink', 'Tamarindo pulp with natural sweeteners', 4.99),
    ('Soda (Refil)', 'drink','Just normal soda', 3.99);

--Insert appetizers
INSERT INTO menu_items (name, category, description, price)
VALUES
    ('Guacamole con Totopos', 'appetizer', 'mashed avocados with chips', 3.99),
    ('Queso Fundido', 'appetizer', 'Melted cheese', 3.99),
    ('Sopes', 'appetizer', 'Hand-made corn tortilla', 2.90),
    ('Tlacoyos', 'appetizer', 'Hand-made filled corn tortilla', 3.90),
    ('Nachos con Frijoles', 'appetizer', 'Nachos with beans and cheese', 1.90),

--Insert Additionals
INSERT INTO menu_items (name, category, description, price)
VALUES
    ('Tortillas Extra', 'additional','More tortillas', 1.00),
    ('Extra Queso', 'additional', 'Put cheese on your tacos',1.20),
    ('Salsa Especial', 'additional', 'Discover the matching salsa as recommended by the chef', 1.00),
    ('Frijoles Refritos', 'additional','More beans for your tacos', 1.20),
    ('Arroz Mexicano', 'additional','Mexican Rice with tomato sauce flavor', 1.00);