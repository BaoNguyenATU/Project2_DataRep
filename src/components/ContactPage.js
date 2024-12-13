import { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { useState } from "react";

const ContactPage = () => {
    // State to manage forming inputs by user(s)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
    });

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

    return (
        <div>
            {/* Include NavigationBar */}
            <NavigationBar />

            {/* Contact Form */}
            <h1>CONTACT US</h1>
            <h3>Feel free to contact us through email at seventhheaven@gmail.com</h3>

            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Surname Input */}
                <div>
                    <label htmlFor="surname">Last Name:</label>
                    <input
                        type="text"
                        id="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email..."
                        required
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        placeholder="1234567890"
                        required
                    />
                    <small>Enter a 10-digit phone number</small>
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;