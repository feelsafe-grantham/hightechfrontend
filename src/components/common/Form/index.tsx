import { useState } from "react";
import styles from "./Form.module.css"
const indStateAndUt = [
    { name: "Andhra Pradesh", value: "Andhra Pradesh" },
    { name: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { name: "Assam", value: "Assam" },
    { name: "Bihar", value: "Bihar" },
    { name: "Chhattisgarh", value: "Chhattisgarh" },
    { name: "Goa", value: "Goa" },
    { name: "Gujarat", value: "Gujarat" },
    { name: "Haryana", value: "Haryana" },
    { name: "Himachal Pradesh", value: "Himachal Pradesh" },
    { name: "Jharkhand", value: "Jharkhand" },
    { name: "Karnataka", value: "Karnataka" },
    { name: "Kerala", value: "Kerala" },
    { name: "Madhya Pradesh", value: "Madhya Pradesh" },
    { name: "Maharashtra", value: "Maharashtra" },
    { name: "Manipur", value: "Manipur" },
    { name: "Meghalaya", value: "Meghalaya" },
    { name: "Mizoram", value: "Mizoram" },
    { name: "Nagaland", value: "Nagaland" },
    { name: "Odisha", value: "Odisha" },
    { name: "Punjab", value: "Punjab" },
    { name: "Rajasthan", value: "Rajasthan" },
    { name: "Sikkim", value: "Sikkim" },
    { name: "Tamil Nadu", value: "Tamil Nadu" },
    { name: "Telangana", value: "Telangana" },
    { name: "Tripura", value: "Tripura" },
    { name: "Uttar Pradesh", value: "Uttar Pradesh" },
    { name: "Uttarakhand", value: "Uttarakhand" },
    { name: "West Bengal", value: "West Bengal" },
    { name: "Chandigarh", value: "Chandigarh" },
    { name: "Lakshadweep", value: "Lakshadweep" },
    { name: "Delhi", value: "Delhi" },
    { name: "Puducherry", value: "Puducherry" },
    { name: "Ladakh", value: "Ladakh" }
];
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);


    return (
        <form
            action="https://formspree.io/f/movepwqv"
            method="POST"
            className={`${styles.form}`}
            onSubmit={() => setShowThankYou(true)}
        >
            <input
                name="name"
                placeholder="Name"
                className={`${styles.inputBox}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                name="email"
                placeholder="Email"
                className={`${styles.inputBox}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                name="phone"
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
                {indStateAndUt.map((state, index) => (
                    <option key={index} value={state.value}>{state.name}</option>
                ))}
            </select>
            <textarea
                name="message"
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