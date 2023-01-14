
CREATE TABLE Inventario(
    id INT(11) NOT NULL AUTO_INCREMENT,
    accesorios VARCHAR(45) DEFAULT NULL,
    autos INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE Inventario;

INSERT INTO Inventario values
    (1, 'accesorios', 2000),
    (2, 'autos', 400000),
   

SELECT * FROM Inventario;
