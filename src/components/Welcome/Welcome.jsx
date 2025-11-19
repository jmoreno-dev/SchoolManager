import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {

    {/* Use the useNavigate hook to programmatically navigate */ }
    const navigate = useNavigate();

    {/* Handler for going to login page when Get Started button is clicked */ }
    function handleGetStarted() {
        navigate("login");
    }

    return (
        <div className={styles["welcome-container"]}>
            <h2>Welcome to the School Manager App!</h2>
            <p>Manage your school activities efficiently and effectively.</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}

export default Welcome;