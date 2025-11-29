import styles from "./Home.module.css";

function Home() {
    return (
        <>
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
            <section className={styles["home-container"]}>
                <h1>Home Page</h1>
                <p>Welcome to the Home Page of the School Manager App!</p>
                <p>Please, select a section from the navigation menu.</p>
            </section>
        </>
    );
}
export default Home;