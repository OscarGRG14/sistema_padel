-- Crear la base de datos "torneo_padel"
CREATE DATABASE torneo_padel;

-- Seleccionar la base de datos "torneo_padel"
USE torneo_padel;

-- Crear la tabla "users"
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  sexo VARCHAR(10),
  fechaNacimiento DATE,
  nacionalidad VARCHAR(100),
  documento VARCHAR(50),
  rango INT NOT NULL,
  nivel INT NOT NULL,
  esAdministrador BOOLEAN DEFAULT 0,
  partidas_jugadas INT DEFAULT 0,
  torneos_jugados INT DEFAULT 0,
  torneos_no_ganados INT DEFAULT 0,
  torneos_ganados INT DEFAULT 0
);

-- Crear la tabla "tournaments"
CREATE TABLE tournaments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE,
  hora TIME,
  cancha VARCHAR(100),
  ubicacion VARCHAR(100)
);
