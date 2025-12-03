import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    // Logic for handling form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Add forgot password logic here
        console.log("Forgot password submitted");
        alert("Password reset link sent to your email. Back to login.");
        setMessage("Password reset link successfully sent to your email.");
    }
    // Handler for navigating back to login page
    function handleLoginNavigation() {
        navigate("/login");
    }

    return (
        <section className={styles["forgot-password-section"]}>
            <h2>Forgot your password?</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Reset password</button>
            </form>
            <button onClick={handleLoginNavigation}>Back to Login</button>
            {message && <p className={styles["success-message"]}>{message}</p>}
        </section>
    );
}
export default ForgotPassword;