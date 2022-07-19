import React, { useState } from "react"; 

const FORM_ENDPOINT = "https://public.herotofu.com/v1/4d9a6040-0759-11ed-be50-e78da9ee852d"; 
// TODO - fill on the later step

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100)
  };

  if (submitted) {
    return (
      <>
      <h4>Thank you!</h4>
      <p>I'll be in touch soon.</p>
      </>
      );
  }

  return (
    <>
      <form
          className = "contact-form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button className = "form-button" type="submit"> Send a message </button>
      </div>
    </form>
    </>
  )

}
