import { useEffect } from "react";
import NavigationBar from "./NavigationBar";

const ContactPage = () => {
    <div>
        <h1>CONTACT US</h1>
        <h3>Feel free to contact us through email @ seventhheaven@gmail.com</h3>
        <input type='string' id='name' pattern='' size={10}></input>
        <input type='string' id='surname' pattern='' size={10}></input>
        <input type='email' id='email' pattern='...@gmailcom' size={30} required>Enter your email...</input>
        <input type='number' id='phone' pattern='          ' size={10}></input>
    </div>

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handling submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Thank you for contacting us!");
    };
}

export default ContactPage;