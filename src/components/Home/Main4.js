import React from 'react';
import useContactForm from '../../hooks/useContactForm';
import "../style.css";

const Main4 = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="s2" id="contactt">
      <div className="main-container">
        <h3 style={{ textAlign: 'center' }}>Get In Touch</h3>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name *</label>
          <input
            className={`input-field ${errors.name ? 'error' : ''}`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <label htmlFor="subject">Subject *</label>
          <input
            className={`input-field ${errors.subject ? 'error' : ''}`}
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}

          <label htmlFor="email">Email *</label>
          <input
            className={`input-field ${errors.email ? 'error' : ''}`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <label htmlFor="message">Message *</label>
          <textarea
            className={`input-field ${errors.message ? 'error' : ''}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows="5"
          />
          {errors.message && <span className="error-message">{errors.message}</span>}

          <input
            id="submit-btn"
            type="submit"
            value={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default Main4;
