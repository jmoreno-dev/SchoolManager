import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
    // Use the useNavigate hook to programmatically navigate
    const navigate = useNavigate();

    // Handler for going to login page when Get Started button is clicked
    function handleGetStarted() {
        navigate("register");
    }
    // Handler for going to login page when Sign In link is clicked
    function handleSignIn() {
        navigate("login");
    }

    return (
        <section className={styles["welcome-section"]}>
            <h1>Welcome to the School Manager App!</h1>
            <h3>Manage your school activities efficiently and effectively.</h3>
            <button onClick={handleGetStarted}>Get started</button>
            <div className={styles["sign-in"]}>
                <span>You already have an account? <a href="" onClick={handleSignIn}>Sign in here.</a></span>
            </div>
        </section>
    );
}

export default Welcome;