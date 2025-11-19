import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
    const navigate = useNavigate();

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