
CREATE TABLE Ventas(
    id INT(11) NOT NULL AUTO_INCREMENT,
    precio VARCHAR(45) DEFAULT NULL,
    productos INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE ventas;

INSERT INTO ventas values
    (1, 'mustang', 5600000),
    (2, 'ferrari', 4500000),
    (3, 'chevrolet', 5000);

SELECT * FROM ventas;
