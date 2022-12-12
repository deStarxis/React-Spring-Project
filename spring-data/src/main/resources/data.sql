INSERT INTO category (name) VALUES
                                ('Laptop'),('Phone');

INSERT INTO address (street, zip, city) VALUES
                                            ('1000 N. 4th St.', 52557, 'FairField'),
                                            ('1001 N. 5th St.', 52885, 'Sigourney');

INSERT INTO role (id, role)
VALUES (1, 'ADMIN');
INSERT INTO role (id, role)
VALUES (2, 'USER');

INSERT INTO users (email, password, first_name, last_name, id_address) VALUES
                                                                           ('ujjwal@gmail.com', '$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2', 'Ujjwal', 'Humagain', 1),
                                                                           ('prajjwol@gmail.com', '$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2', 'Prajjwol', 'Humagain', 2);

INSERT INTO users_roles (user_id, roles_id)
VALUES (1, 1);
INSERT INTO users_roles (user_id, roles_id)
VALUES (2, 2);
INSERT INTO product (name, price, rating, id_category,id_user) VALUES
                                                           ('Macbook', 1000, 4, 1,1),('Acer', 700, 5, 1,2),
                                                           ('Pixel', 500, 5, 2,2),('Samsung', 300, 6, 2,1);

INSERT INTO review (comment, id_product, id_user) VALUES
                                                      ('Great Product', 1, 2),
                                                      ('Nice One', 1, 1),
                                                      ('Bad Product',2,2);

