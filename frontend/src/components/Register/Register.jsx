import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [messageTeacher, setMessageTeacher] = useState("");
    const [messageStudent, setMessageStudent] = useState("");
    const [isTeacherDisabled, setIsTeacherDisabled] = useState(false);
    const [isStudentDisabled, setIsStudentDisabled] = useState(false);

    function handleTeacherSubmit(event) {
        event.preventDefault();
        console.log("Registration submitted as Teacher");
        alert("Registration successful! Please log in.");
        setMessageTeacher("Registration successful as a " + role + "! Please log in.");
        setIsStudentDisabled(true); // Disable the Student button
    }
    function handleStudentSubmit(event) {
        event.preventDefault();
        console.log("Registration submitted as Student");
        alert("Registration successful! Please log in.");
        setMessageStudent("Registration successful as a " + role + "! Please log in.");
        setIsTeacherDisabled(true); // Disable the Teacher button
    }

    return (
        <section className={styles["register-container"]}>
            <h1>Register Page</h1>
            <div className={styles["cards-container"]}>
                <article>
                    <card>
                        <card-title>Register as a Teacher</card-title>
                        <card-body>
                            <form action="" onSubmit={handleTeacherSubmit}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                                <button type="submit" onClick={() => setRole("Teacher")} disabled={isTeacherDisabled || isStudentDisabled}>Register as Teacher</button>
                            </form>
                            {messageTeacher && <p className={styles["success-message"]}>{messageTeacher}</p>}
                        </card-body>
                    </card>
                </article>

                <article>
                    <card>
                        <card-title>Register as a Student</card-title>
                        <card-body>
                            <form action="" onSubmit={handleStudentSubmit}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                                <button type="submit" onClick={() => setRole("Student")} disabled={isStudentDisabled || isTeacherDisabled}>Register as Student</button>
                            </form>
                            {messageStudent && <p className={styles["success-message"]}>{messageStudent}</p>}
                        </card-body>
                    </card>
                </article>
            </div>

            <button className={styles["login-button"]} onClick={() => navigate("/login")}>Go to Login</button>

        </section>
    );
}

export default Register;