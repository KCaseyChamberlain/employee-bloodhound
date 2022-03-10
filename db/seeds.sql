INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('James', 'Rickling' , 1, 2),
('Virginia', 'Woolf', 3, 1),
('Charles', 'LeRoi', 2, 3),
('Montague', 'Summers', 1, 1),
('Ducky', 'Wack', 6, 5);

INSERT INTO role (role_name, salary, department_id)
VALUES 
("Driver", 25000, 1),
("Artist", 48000, 2),
("Dancer", 12000, 2),
("Boxer", 80000, 6),
("Dog Walker", 15555, 6),
("Manager", 40000, 7),
("Lawn Mower", 30000, 3);

INSERT INTO department (department_name)
VALUES
("Transportation"),
("Fine Arts"),
("Landscaping"),
("Shipping"),
("Construction"),
("Fitness"),
("Management");