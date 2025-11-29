import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css";

function Home() {
    return (
        <>
            <NavBar />
            <section className={styles["home-container"]}>
                <h1>Home Page</h1>
                <p>Welcome to the Home Page of the School Manager App!</p>
                <p>Please, select a section from the navigation menu.</p>
            </section>
        </>
    );
}
export default Home;