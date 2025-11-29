import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <header className={styles["header-container"]}>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/students">Students</a></li>
                    <li><a href="/teachers">Teachers</a></li>
                    <li><a href="/classes">Classes</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;