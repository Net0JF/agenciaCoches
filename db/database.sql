-- CREATE DATABASE IF NOT EXISTS agenciaCochesdb;

-- USE agenciaCochesdb;

CREATE TABLE empleados (
  idEmpleado INT(11) NOT NULL AUTO_INCREMENT,
  nombreEmpleado VARCHAR(45) DEFAULT NULL,
  salarioEmpleado INT(11) DEFAULT NULL, 
  PRIMARY KEY(idEmpleado)
);

DESCRIBE empleados;

INSERT INTO empleados values 
  (1, 'Ulises', 20000),
  (2, 'Carlos Cruz', 40000),
  (3, 'Helena Fernandez', 50000); 

SELECT * FROM empleados;


CREATE TABLE inventario(
    idCoche INT(11) NOT NULL AUTO_INCREMENT,
    nombreCoche VARCHAR(45) DEFAULT NULL,
    marcaCoche VARCHAR(45) DEFAULT NULL,
    precioCoche INT(11) DEFAULT NULL,
    PRIMARY KEY(idCoche)
);

DESCRIBE inventario;

INSERT INTO inventario values
    (1, 'Versa', 'Nissan', 200000),
    (2, 'Tsuru', 'Nissan', 400000);
   

SELECT * FROM inventario;


CREATE TABLE ventas(
    idVenta INT(11) NOT NULL AUTO_INCREMENT,
    idEmpleado INT(11) DEFAULT NULL,
    idCoche INT(11) DEFAULT NULL,
    PRIMARY KEY(idVenta)
);

DESCRIBE ventas;

INSERT INTO ventas values
    (1, 1, 1),
    (2, 2, 2),
    (3, 2, 1);

SELECT * FROM ventas;
