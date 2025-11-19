import { useNavigate } from "react-router-dom";
import "./Welcome.module.css";

function Welcome() {
    const navigate = useNavigate();

    function handleGetStarted() {
        navigate("/Login");
    }

    return (
        <div className="style.welcome-container">
            <h2>Welcome to the School Manager App!</h2>
            <p>Manage your school activities efficiently and effectively.</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}

export default Welcome;