import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CreatePlayerForm.css";

const CreatePlayerForm = () => {
  const initialValues = {
    nombre: "",
    apellido: "",
    sexo: "",
    fechaNacimiento: "",
    nacionalidad: "",
    documento: "",
    rango: 0,
    nivel: 0,
    esAdministrador: false,
    partidas_jugadas: 0,
    torneos_jugados: 0,
    torneos_no_ganados: 0,
    torneos_ganados: 0,
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Campo requerido"),
    apellido: Yup.string().required("Campo requerido"),
    sexo: Yup.string().required("Campo requerido"),
    fechaNacimiento: Yup.date().required("Campo requerido"),
    nacionalidad: Yup.string().required("Campo requerido"),
    documento: Yup.string().required("Campo requerido"),
    rango: Yup.number().required("Campo requerido"),
    nivel: Yup.number().required("Campo requerido"),
    esAdministrador: Yup.string().required("Campo requerido"),
    partidas_jugadas: Yup.number().required("Campo requerido"),
    torneos_jugados: Yup.number().required("Campo requerido"),
    torneos_no_ganados: Yup.number().required("Campo requerido"),
    torneos_ganados: Yup.number().required("Campo requerido"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("http://localhost:5000/users", values)
      .then((response) => {
        console.log(response.data);
        // Realiza acciones adicionales según sea necesario
      })
      .catch((error) => {
        console.error(error);
        // Manejo de errores
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="create-player-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <Field type="text" id="nombre" name="nombre" />
              <ErrorMessage
                name="nombre"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <Field type="text" id="apellido" name="apellido" />
              <ErrorMessage
                name="apellido"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <Field type="text" id="sexo" name="sexo" />
              <ErrorMessage
                name="sexo"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
              <Field type="date" id="fechaNacimiento" name="fechaNacimiento" />
              <ErrorMessage
                name="fechaNacimiento"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nacionalidad">Nacionalidad:</label>
              <Field type="text" id="nacionalidad" name="nacionalidad" />
              <ErrorMessage
                name="nacionalidad"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="documento">C.I. / DNI / CPF:</label>
              <Field type="text" id="documento" name="documento" />
              <ErrorMessage
                name="documento"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rango">Rango:</label>
              <Field type="number" id="rango" name="rango" />
              <ErrorMessage
                name="rango"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nivel">Nivel:</label>
              <Field type="number" id="nivel" name="nivel" />
              <ErrorMessage
                name="nivel"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="esAdministrador">Administrador:</label>
              <Field type="text" id="esAdministrador" name="esAdministrador" />
              <ErrorMessage
                name="esAdministrador"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="partidas_jugadas">Partidas Jugadas:</label>
              <Field
                type="number"
                id="partidas_jugadas"
                name="partidas_jugadas"
              />
              <ErrorMessage
                name="partidas_jugadas"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="torneos_jugados">Torneos Jugados:</label>
              <Field
                type="number"
                id="torneos_jugados"
                name="torneos_jugados"
              />
              <ErrorMessage
                name="torneos_jugados"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="torneos_no_ganados">Torneos No Ganados:</label>
              <Field
                type="number"
                id="torneos_no_ganados"
                name="torneos_no_ganados"
              />
              <ErrorMessage
                name="torneos_no_ganados"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="torneos_ganados">Torneos Ganados:</label>
              <Field
                type="number"
                id="torneos_ganados"
                name="torneos_ganados"
              />
              <ErrorMessage
                name="torneos_ganados"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Enviando..." : "Crear jugador"}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default CreatePlayerForm;
