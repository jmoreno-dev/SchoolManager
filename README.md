# SchoolManager

A full-stack web application for schools to efficiently manage their activities, including student records, teacher information, schedules, and more. Built with a **Spring Boot** backend and **React + Vite** frontend.

## Overview

| Component | Tech Stack |
|-----------|-----------|
| **Backend** | Java, Spring Boot, Gradle |
| **Frontend** | React, Vite, npm |
| **Styling** | CSS Modules |

## Features

- 🎓 **Student Management** - Track and manage student records
- 👨‍🏫 **Teacher Management** - Manage teacher information
- 📚 **Classes Management** - Organize and view classes
- 🔐 **Authentication** - Secure login and registration system
- 📱 **Responsive UI** - Modern, mobile-friendly interface
- ⚡ **Hot Module Replacement** - Instant updates during development

## Project Structure

```
SchoolManager/
├── backend/
│   └── schoolmanager/              # Spring Boot application
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/example/schoolmanager/
│       │   │   │   ├── SchoolmanagerApplication.java
│       │   │   │   ├── entity/
│       │   │   │   │   ├── Student.java
│       │   │   │   │   └── Teacher.java
│       │   │   │   ├── repository/
│       │   │   │   └── service/
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       ├── build.gradle
│       ├── gradlew
│       └── gradlew.bat
├── frontend/
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Welcome/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Students/
│   │   │   ├── Teachers/
│   │   │   ├── Classes/
│   │   │   └── NavBar/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## Requirements

- **Java 11+** (or version required by Spring Boot)
- **Gradle** (included via Gradle Wrapper)
- **Node.js 14+**
- **npm**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jmoreno-dev/SchoolManager.git
cd SchoolManager
```

### 2. Setup & Run Backend (Spring Boot)

Open PowerShell and navigate to the backend folder:

```powershell
cd backend\schoolmanager
.\gradlew.bat bootRun
```

The backend will start on `http://localhost:8080` (or the port defined in `application.properties`).

### 3. Setup & Run Frontend (React + Vite)

In another PowerShell terminal:

```powershell
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

**Tip:** Open both terminals side-by-side to run backend and frontend simultaneously.

## Building for Production

### Backend Build

```powershell
cd backend\schoolmanager
.\gradlew.bat build
```

The JAR file will be generated in `build/libs/`.

### Frontend Build

```powershell
cd frontend
npm run build
```

Static files will be output to the `dist/` folder.

## Testing

### Backend Tests

```powershell
cd backend\schoolmanager
.\gradlew.bat test
```

### Frontend Tests

```powershell
cd frontend
npm test
```

(if configured)

## Configuration

- **Backend**: Modify `backend/schoolmanager/src/main/resources/application.properties` for database, server port, and other settings.
- **Frontend**: Create a `.env` file in the `frontend/` directory for environment variables (use `VITE_` prefix to expose them).

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Gradle](https://gradle.org/)

---

Happy coding! 🚀