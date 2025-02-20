import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css"; // Importa los estilos CSS Modules

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Estado para mensajes de éxito/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Todos los campos son obligatorios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Correo inválido.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_hqev20h", // Reemplaza con tu Service ID
        "template_6jy8g3v", // Reemplaza con tu Template ID
        e.target,
        "d39u6bY7b8CXD8VYu" // Reemplaza con tu User ID de EmailJS
       //"GfmK6H_uSwEYIllkm5w2s"       
      )
      .then(
        () => setStatus("Mensaje enviado con éxito."),
        (error) => setStatus("Error al enviar el mensaje: " + error.text)
      );

    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Tu Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Escribe tu mensaje..."
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Enviar Mensaje
      </button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
};

export default ContactForm;
