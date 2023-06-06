import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./CreateTournament.css";

const validationSchema = Yup.object().shape({
  fecha: Yup.date().required("La fecha es requerida"),
  hora: Yup.string().required("La hora es requerida"),
  cancha: Yup.string().required("La cancha es requerida"),
  ubicacion: Yup.string().required("La ubicación es requerida"),
});

const CreateTournamentForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post("http://localhost:5000/tournaments", values)
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta del servidor después de crear el torneo
        // Por ejemplo, mostrar un mensaje de éxito o redirigir a la página de torneos
      })
      .catch((error) => {
        console.error(error);
        // Aquí puedes manejar el error en caso de que ocurra al crear el torneo
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="create-tournament"
    >
      <h2>Crear Torneo</h2>
      <Formik
        initialValues={{
          fecha: "",
          hora: "",
          cancha: "",
          ubicacion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="fecha">Fecha:</label>
              <Field type="date" id="fecha" name="fecha" />
              <ErrorMessage
                name="fecha"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="hora">Hora:</label>
              <Field type="time" id="hora" name="hora" />
              <ErrorMessage
                name="hora"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="cancha">Cancha:</label>
              <Field type="text" id="cancha" name="cancha" />
              <ErrorMessage
                name="cancha"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <label htmlFor="ubicacion">Ubicación:</label>
              <Field type="text" id="ubicacion" name="ubicacion" />
              <ErrorMessage
                name="ubicacion"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Crear Torneo
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default CreateTournamentForm;
