import { useState } from "react";
import styles from "./Form.module.css"
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, phone, state, message });
        setShowThankYou(true);
        resetForm();
    };
    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setState("");
        setMessage("");
    }
    return (
        <form className={`${styles.form}`} onSubmit={handleSubmit}>
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
            />
            <input
                placeholder="Phone Number"
                className={`${styles.inputBox}`}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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