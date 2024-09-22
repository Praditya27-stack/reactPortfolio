import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        form.current,
        import.meta.env.VITE_EMAILJS_USERID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error in sending message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="h-screen bg-gray-100 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(0, 140, 255)'}}>Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 w-1/2"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 border border-gray-400 rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 border border-gray-400 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border border-gray-400 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
