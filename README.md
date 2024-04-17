# SavZar-registers

This is a project for managing users. The backend is in Nest and the Frontend is in React.
Backend Technologies: NestJS, TypeORM, SQLite
Frontend Technologies: React, Redux, RTK, Material-UI, Axios

## Features
In the frontend we have Auth, CRUD operations for users, CEP Api integration, Toasts and a table with pagination.
In the backend we have Auth and Authorisation, JWT, Session Auth, CRUD operations for users and pagination.

## Important READ THIS
Every created user is set as administrator. To use just navigate to SignUp, and you'll be able to create
persons. The backend has a Guard for authorisation, but since I've set every user as admin you're good to go.

## Installation

``yarn``

## Compiling backend

``yarn start:dev``

## Compiling frontend 

``yarn start``

