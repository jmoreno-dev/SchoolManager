import styles from './Students.module.css';
import { useState } from 'react';

function Students() {
    const [students] = useState([
        { id: 1, name: "Ana", age: 20, class: "Math" },
        { id: 2, name: "Bruno", age: 22, class: "Science" },
        { id: 3, name: "Carlos", age: 21, class: "History" },
        { id: 4, name: "Diana", age: 19, class: "Math" },
    ]);

    return (
        <>
            <h1>Students</h1>
            <section>
                <table className={styles["students-table"]}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Class</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.class}</td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Students;