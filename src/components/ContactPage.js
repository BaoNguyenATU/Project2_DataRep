import { useEffect } from "react";

const ContactPage = () => {
    <div>
        <h1>CONTACT US</h1>
        <h3>Feel free to contact us through email @ seventhheaven@gmail.com</h3>
        <input type='string' id='name' pattern='' size={10}></input>
        <input type='string' id='surname' pattern='' size={10}></input>
        <input type='email' id='email' pattern='...@gmailcom' size={30} required>Enter your email...</input>
        <input type='number' id='phone' pattern='          ' size={10}></input>
    </div>
}

export default ContactPage;