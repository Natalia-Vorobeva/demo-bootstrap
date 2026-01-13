import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Форма отправлена! (демо)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="contact-section py-5 bg-light" 
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 id="contact-heading" className="h3 mb-4 text-center">
                  Контактная форма
                </h2>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Имя *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите ваше имя
                      </div>
                    </div>
                    
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                      <div className="invalid-feedback">
                        Пожалуйста, введите корректный email
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Сообщение *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    ></textarea>
                    <div className="invalid-feedback">
                      Пожалуйста, введите ваше сообщение
                    </div>
                  </div>
                  
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consent"
                      required
                    />
                    <label className="form-check-label" htmlFor="consent">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block mt-3"
                    aria-label="Отправить контактную форму"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;