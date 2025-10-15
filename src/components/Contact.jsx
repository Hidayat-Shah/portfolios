import React from "react";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    send(
      "service_aj1gqss",   // ✅ your EmailJS service ID
      "template_q0nqa6f",  // ✅ your EmailJS template ID
      {
        name: data.name,   // make sure matches your template variables
        email: data.email,
        message: data.message
      },
      "18pZ5kSbYHSsbnlZ_"  // ✅ your public key
    )
    .then(() => {
      toast.success("✅ Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      reset();
    })
    .catch((err) => {
      toast.error("❌ Failed to send message. Try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error(err);
    });
  };

  return (
    <section id="contact" className="py-5 contact-section bg-light">
      <div className="container">

        <h2 className="text-center mb-5 text-primary fw-bold">
        Contact <span className="text-dark">Me</span>
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-card p-4 shadow-lg rounded">

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input 
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email address" } 
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea 
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="5"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100 btn-send">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
