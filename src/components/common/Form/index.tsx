import { useState } from "react";
import styles from "./Form.module.css"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('email', email);
    //     formData.append('phone', phone);
    //     formData.append('state', state);
    //     formData.append('message', message);
    //     try {
    //         const response = await fetch('https://formspree.io/f/movepwqv', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         if (response.ok) {

    //             setShowThankYou(true);
    //             resetForm();
    //         } else {
    //             // console.log('Form submission failed');
    //         }

    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };
    // const resetForm = () => {
    //     setName("");
    //     setEmail("");
    //     setPhone("");
    //     setState("");
    //     setMessage("");
    // }
    return (
        <form
            action="https://formspree.io/f/movepwqv"
            method="POST"
            className={`${styles.form}`} onSubmit={() => setShowThankYou(true)}
        >
            <input
                placeholder="Name"
                className={`${styles.inputBox}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Email"
                className={`${styles.inputBox}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                placeholder="Phone Number"
                className={`${styles.inputBox}`}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <select
                className={`${styles.inputBox}`}
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="" disabled selected>Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
            </select>
            <textarea
                className={`${styles.inputBox} ${styles.textArea}`}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className={`${styles.submitBtn}`}>Submit</button>
            {showThankYou && (
                <div className={`${styles.thankYouMessage} ${styles.fadeIn}`}>
                    <p>Thank you for your submission!</p>
                </div>
            )}
        </form>
    )
}

export default Form;