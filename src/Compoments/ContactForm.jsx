import React, { useState } from "react";
import "../Styles/Contact.css";


function ContactForm() {
const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title" >Contacte-nos</h2>
      {submitted ? (
        <p>Obrigado pelo seu contacto!</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-input">
          <div className="contact-subtitle">
            <label>Nome:</label>
            <input className="contact-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div  className="contact-subtitle">
            <label>Email:</label>
            <input className="contact-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div  className="contact-subtitle">
            <label>Mensagem:</label>
            <textarea className="contact-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-submit-btn">
          <button className="contact-submit-btn"type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
