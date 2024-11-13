import "./contact.scss";
import { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    emailjs.sendForm('service_el27c4g', 'template_0u7z0cg', e.target, '85iD4aPYyQuFWovVK')
      .then((result) => {
        console.log(result);
        
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' }); 
        setTimeout(() => {
          setStatus('')
        }, 2000);
      }, (error) => {
        console.log(error);
        setStatus('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <div className="form-box">

    <form onSubmit={handleSubmit} className="contact-form">
      
      <div className="form-group">
        <label htmlFor="" >Nom</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="" required/>
      </div>
      
      <div className="form-group">
        <label htmlFor=""> Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="" required/>
      </div>
      <div className="form-group">
        <label htmlFor=""> Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="" required/>
      </div>
      <button type="submit">Envoyer</button>
      <p>{status}</p>
    </form>
    </div>
  );
}

export default Contact;
