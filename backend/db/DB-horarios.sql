-- =====================================
-- CREAR BASE DE DATOS
-- =====================================s
CREATE DATABASE IF NOT EXISTS gestion_horarios;
USE gestion_horarios;

-- =====================================
-- TABLA: PROFESOR
-- =====================================
CREATE TABLE profesor (
    id_profesor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    especialidad VARCHAR(100)
) ENGINE=InnoDB;

-- =====================================
-- TABLA: MATERIA
-- =====================================
CREATE TABLE materia (
    id_materia INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    creditos INT NOT NULL,
    descripcion TEXT,
    CONSTRAINT chk_creditos CHECK (creditos > 0)
) ENGINE=InnoDB;

-- =====================================
-- TABLA: GRUPO
-- =====================================
CREATE TABLE grupo (
    id_grupo INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    semestre INT NOT NULL,
    jornada ENUM('Mañana','Tarde','Noche') NOT NULL,
    CONSTRAINT chk_semestre CHECK (semestre > 0)
) ENGINE=InnoDB;

-- =====================================
-- TABLA: SALON
-- =====================================
CREATE TABLE salon (
    id_salon INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(20) NOT NULL,
    capacidad INT NOT NULL,
    edificio VARCHAR(100),
    UNIQUE (numero, edificio),
    CONSTRAINT chk_capacidad CHECK (capacidad > 0)
) ENGINE=InnoDB;

-- =====================================
-- TABLA: HORARIO
-- =====================================
CREATE TABLE horario (
    id_horario INT AUTO_INCREMENT PRIMARY KEY,
    dia ENUM('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado') NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,

    id_profesor INT NOT NULL,
    id_materia INT NOT NULL,
    id_grupo INT NOT NULL,
    id_salon INT NOT NULL,

    CONSTRAINT fk_profesor
        FOREIGN KEY (id_profesor)
        REFERENCES profesor(id_profesor)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_materia
        FOREIGN KEY (id_materia)
        REFERENCES materia(id_materia)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_grupo
        FOREIGN KEY (id_grupo)
        REFERENCES grupo(id_grupo)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_salon
        FOREIGN KEY (id_salon)
        REFERENCES salon(id_salon)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT chk_horas CHECK (hora_fin > hora_inicio)
) ENGINE=InnoDB;

-- =====================================
-- ÍNDICES PARA RENDIMIENTO
-- =====================================
CREATE INDEX idx_horario_profesor ON horario(id_profesor);
CREATE INDEX idx_horario_grupo ON horario(id_grupo);
CREATE INDEX idx_horario_salon ON horario(id_salon);
CREATE INDEX idx_horario_dia ON horario(dia);


-- =========================
-- PROFESOR (10)
-- =========================
INSERT INTO profesor (nombre, apellido, email, especialidad) VALUES
('Carlos','Ramirez','carlos.ramirez@uni.edu','Matemáticas'),
('Ana','Gomez','ana.gomez@uni.edu','Programación'),
('Luis','Martinez','luis.martinez@uni.edu','Bases de Datos'),
('Marta','Lopez','marta.lopez@uni.edu','Redes'),
('Jorge','Perez','jorge.perez@uni.edu','Física'),
('Laura','Torres','laura.torres@uni.edu','Ingeniería de Software'),
('Diego','Sanchez','diego.sanchez@uni.edu','Seguridad Informática'),
('Sofia','Diaz','sofia.diaz@uni.edu','Estadística'),
('Andres','Moreno','andres.moreno@uni.edu','Arquitectura de Software'),
('Paula','Rojas','paula.rojas@uni.edu','Inteligencia Artificial');

-- =========================
-- MATERIA (10)
-- =========================
INSERT INTO materia (nombre, creditos, descripcion) VALUES
('Calculo I',4,'Matemáticas básicas'),
('Programación I',3,'Fundamentos de programación'),
('Base de Datos I',3,'Modelo relacional'),
('Redes I',3,'Fundamentos de redes'),
('Fisica I',4,'Mecánica clásica'),
('Ingeniería de Software',3,'Metodologías de desarrollo'),
('Seguridad Informatica',3,'Conceptos de ciberseguridad'),
('Estadistica',3,'Probabilidad y estadística'),
('Arquitectura de Software',3,'Patrones y diseño'),
('Inteligencia Artificial',3,'Fundamentos de IA');

-- =========================
-- GRUPO (10)
-- =========================
INSERT INTO grupo (codigo, semestre, jornada) VALUES
('G101',1,'Mañana'),
('G102',1,'Tarde'),
('G201',2,'Mañana'),
('G202',2,'Noche'),
('G301',3,'Mañana'),
('G302',3,'Tarde'),
('G401',4,'Noche'),
('G402',4,'Mañana'),
('G501',5,'Tarde'),
('G502',5,'Noche');

-- =========================
-- SALON (10)
-- =========================
INSERT INTO salon (numero, capacidad, edificio) VALUES
('101',30,'A'),
('102',25,'A'),
('201',40,'B'),
('202',35,'B'),
('301',30,'C'),
('302',20,'C'),
('401',50,'D'),
('402',45,'D'),
('501',60,'E'),
('502',55,'E');

-- =========================
-- HORARIO (10)
-- =========================
INSERT INTO horario (dia, hora_inicio, hora_fin, id_profesor, id_materia, id_grupo, id_salon) VALUES
('Lunes','06:00:00','08:00:00',1,1,1,1),
('Lunes','08:00:00','10:00:00',2,2,2,2),
('Martes','06:00:00','08:00:00',3,3,3,3),
('Martes','08:00:00','10:00:00',4,4,4,4),
('Miercoles','06:00:00','08:00:00',5,5,5,5),
('Miercoles','08:00:00','10:00:00',6,6,6,6),
('Jueves','06:00:00','08:00:00',7,7,7,7),
('Jueves','08:00:00','10:00:00',8,8,8,8),
('Viernes','06:00:00','08:00:00',9,9,9,9),
('Sabado','08:00:00','10:00:00',10,10,10,10);