INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Fraser', 1, 1),
  ('Jack', 'London', 2, 2),
  ('Robert', 'Bruce', 3, 3),
  ('Peter', 'Greenaway', 4, 1),
  ('Derek', 'Jarman', 5, 2),
  ('Paolo', 'Pasolini', 1, 3),
  ('Heathcote', 'Williams', 2, 1),
  ('Sandy', 'Powell', 3, 2),
  ('Emil', 'Zola', 4, 3),
  ('Sissy', 'Coalpits', 1, 1);

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Junior Developer', 55361.89 , 1),
  ('Junior Developer', 58678.12 , 2),
  ('Project Manager', 98786.56, 1),
  ('Project Manager', 102206.46, 2),
  ('Chief Executive Officer', 210565.99, 3);

INSERT INTO departments (name)
VALUES
  ('Frontend Developer'),
  ('Backend Developer'),
  ('Business & Finance');