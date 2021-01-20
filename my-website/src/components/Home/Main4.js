import React from 'react'
import emailjs from 'emailjs-com';
import "../style.css"

const Main4 = () => {
      const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_hiexk5o', 'template_8pr7mhv', e.target,
                              'user_nfnzqRPjGcJhpsXZuYuFY')
      .then((result) => {
            // console.log(result.text);
            alert('successful, we will get back to you soon')
      }, (error) => {
            console.log(error.text);
      });

      e.target.reset()
      }

      return (
      <section className="s2" id="contactt">
            <div className="main-container">
                  <h3 style={{ textAlign : 'center'}}>Get In Touch</h3>

                  <form id="contact-form" onSubmit={sendEmail}>

                        <label>Name</label>
                        <input className="input-field" type="text" name="name"/>

                        <label>Subject</label>
                        <input className="input-field" type="text" name="subject"/>

                        <label>Email</label>
                        <input className="input-field" type="text" name="email"/>

                        <label>Message</label>
                        <textarea className="input-field" name="message"></textarea>

                        <input id="submit-btn" type="submit" value="Send"/>
                  </form>
            </div>
      </section>
      )
}

export default Main4
