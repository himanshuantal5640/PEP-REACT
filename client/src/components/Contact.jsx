import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [values, setValues] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [form,setForm] = useState({
    name:"",
    email:""
  })
  console.log("Form:", form);
  const handleChange = (e) => {
    // form.email = e.target.value;
    setForm({
      ...form,
      [e.target.name]: e.target.value
      // name: e.target.value,
      // email:e.target.value
    })
    // setForm(form);
    console.log(form);
  }
  // const handleChange = (e) => {
  //   setValues(e.target.value);
  //   console.log("Name:", values);

  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log("Email:", email);
  // };
  // const handleMessage = (e) =>{
  //   setMessage(e.target.value);
  //   console.log("Message:",message)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues("");
    console.log(form);
    alert("Message sent! We'll get back to you soon.");
  };

  // UI = F(STATE); one way binding

  // const obj1 = {
  //   name:"Himanshu",
  //   email:"email@gmail.com",
  //   addres:{
  //     addres1:"Kyu btao",
  //     addres2:"fir bhi nhi btana"
  //   }
  // }
  // const obj3 = {
  //   name:"Himanshu",
  //   email:"email@gmail.com"
  // }
  // const obj2 = obj1
  // console.log(Object.is(obj1,obj2));
  // console.log(obj1);
  // console.log(obj3);
  // const obj4 = {...obj1};
  // console.log(obj4);
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        {/* LEFT INFO */}
        <div className={styles.info}>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p> {values}
            {/* Have questions about the AI Exam Evaluation System?
            Our team will help you get started. */}
            </p>

          <div className={styles.details}>
            <p><strong>Email:</strong> amanchahar@gmail.com</p>
            <p><strong>Phone:</strong> +91 9302971271</p>
            <p><strong>Location:</strong> India</p>
            </div>
        </div>

        {/* FORM */}
        <form className={styles.form}>

          <input type="text" value={form.name} name="name" onChange={handleChange} placeholder="Your Name" required />
          <input type="email" value={form.email} name="email" onChange={handleChange} placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>

          <button onClick={handleSubmit}>Send Message</button>
        </form>

      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>

          <div>
            <h3>MyBrand</h3>
            <p>AI Powered Exam Evaluation Platform</p>
          </div>

          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.social}>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>

        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
