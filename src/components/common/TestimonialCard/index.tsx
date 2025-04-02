import styles from "./TestimonialCard.module.css"
const TestimonialCard = () => {
    return (
        <div className={`${styles.testimonialCard}`}>
            <img className={`${styles.userImage}`} src="/images/user.jpg" alt="user" />
            <h4 className={`${styles.userName}`}>Client Name</h4>
            <p className={`${styles.userText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, corrupti dolorum. Ea, aperiam </p>
        </div>
    );
}

export default TestimonialCard;