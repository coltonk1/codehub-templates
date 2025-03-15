# Backend Quick Guide

## Setup

-   Uses Gradle and Spring Boot
-   Ensure Java and Gradle are installed
-   Ensure your preferred database is running

## Run the Project

Windows:

```
.\gradlew.bat bootRun
```

Mac/Linux:

```
./gradlew bootRun
```

## Configuration

-   Check `build.gradle.kts` for dependencies and project setup
-   Check `application.properties.example` for examples of necessary configuration variables (database connection). Replace with `application.properties`.
-   This repo is set up for postgres, you will need to modify sections to work with whatever database you prefer.
-

### CORS Configuration

The application has CORS set up for the frontend hosted at http://localhost:3000. If you need to change the allowed origin or other CORS settings, update the SecurityConfig class. It applies to all endpoints automatically.

### Security

Passwords are encoded using BCryptPasswordEncoder.
JWT authentication is implemented. Ensure that the secret key and expiration time are correctly set in the `ApiController` class.

### Error Handling

Global exception handling is in place. If an exception occurs, a detailed response should be returned to the client.
