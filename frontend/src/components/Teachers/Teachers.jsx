import styles from './Teachers.module.css';
import NavBar from '../NavBar/NavBar.jsx';
import { useState } from 'react';
function Teachers() {
    const [teachers] = useState([
        { id: 1, name: 'Mr. Smith', class: 'Math' },
        { id: 2, name: 'Ms. Johnson', class: 'Science' },
        { id: 3, name: 'Mrs. Brown', class: 'History' },
    ]);
    return (
        <>
            <NavBar />
            <h1>Teachers</h1>
            <section>
                <table className={styles["teachers-table"]}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.class}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <button className={styles["add-btn"]}>+ Add Teacher</button>

        </>
    );
}

export default Teachers;