import { useState, } from 'react';
import styles from './ChatBot.module.css';
import { ContactData } from '../../../utils/Data';

const MessageBot = () => {
    const [isVisible, setIsVisible] = useState(true);//make it false by default
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    // useEffect(() => {
    //     // Check if chat was previously shown
    //     const chatShown = localStorage.getItem('chatShown');
    //     if (!chatShown) {
    //         // Add a small delay to ensure the component is mounted
    //         const timer = setTimeout(() => {
    //             setIsVisible(true);
    //             localStorage.setItem('chatShown', 'true');
    //         }, 2000); // Increased delay to 2 seconds
    //         return () => clearTimeout(timer);
    //     }
    // }, []);

    const questions = [
        {
            text: "Find Lowest Price Here",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=I%20would%20like%20to%20know%20the%20lowest%20price.`
        },
        {
            text: "PAN India Delivery?",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=Do%20you%20offer%20PAN%20India%20delivery%3F`
        },
        {
            text: "We Have Customized Options",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=Do%20you%20offer%20customized%20blinds%20options%3F`
        },
        {
            text: "All Types of Blinds Available",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=What%20types%20of%20blinds%20are%20available%3F`
        },
        {
            text: "100% Free Return, No Questions Asked ?",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=Can%20you%20explain%20your%20return%20policy%3F`
        },
        {
            text: "Talk to Sales Team",
            whatsappLink: `https://wa.me/+91${ContactData.phone2}?text=I%20would%20like%20to%20talk%20to%20the%20sales%20team.`
        }
    ];

    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(index);
        window.open(questions[index].whatsappLink, '_blank');
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
                <h3>How can we help you?</h3>
                <button onClick={handleDismiss} className={styles.closeButton}>×</button>
            </div>
            <div className={styles.questionsContainer}>
                {questions.map((question, index) => (
                    <button
                        key={index}
                        className={`${styles.questionButton} ${selectedQuestion === index ? styles.selected : ''}`}
                        onClick={() => handleQuestionClick(index)}
                    >
                        {question.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MessageBot; 