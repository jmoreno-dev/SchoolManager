import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    // Logic for handling forgot password link
    function handleForgotPassword() {
        navigate("/forgot-password");
    }

    // Logic for handling form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Add login logic here
        console.log("Login submitted");
    }

    // Temporary navigation handler (for demonstration purposes)
    function handleTemporalNavigation(event) {
        event.preventDefault();
        navigate("/home");
    }
    return (
        <section className={styles["login-section"]}>
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={handleTemporalNavigation}>Login</button>
            </form>

            <a onClick={handleForgotPassword}>Forgot your password? </a>
        </section>
    );
}

export default Login;