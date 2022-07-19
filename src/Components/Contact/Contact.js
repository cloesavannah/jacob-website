import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
      <div className="contact">
        <h2>Contact</h2>
        {/* <p>Send me a message here.</p> */}
        <div className = "form">
          <ContactForm />
        </div>
      </div>
  )
}
