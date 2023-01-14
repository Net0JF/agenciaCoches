CREATE TABLE Empleados(
id INT(11) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(45) DEFAULT NULL,
salario INT(11) DEFAULT NULL,
PRIMARIA KEY(id)
);

DESCRIBE Empleados;

INSERT INTO Empleados values
    (1, 'juan perez', 20000),
    (2, 'carlos cruz', 40000),
    (3, 'alena fernandez', 50000);

SELECT * FROM Empleados;