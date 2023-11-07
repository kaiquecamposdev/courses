<div align="center">
    <h1>API-REST-IGNITE</h1>
    <h3>◦ Unleash the power of REST with ignite!</h3>
    <h3>◦ Developed with the software and tools below</h3>
</div>

<p align="center">
  <a href="https://skillicons.dev">
    <img src=https://skillicons.dev/icons?i=js,ts,nodejs,jest />
  </a>
</p>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running api-rest-ignite](#-running-api-rest-ignite)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a REST API that allows users to manage and track their transactions. It provides functionalities such as retrieving transactions, creating new transactions, deleting transactions, and retrieving a summary of transactions. The project's purpose is to provide a simple and efficient way for users to keep track of their financial activities, helping them stay organized and make informed decisions. Its value proposition lies in its ease of use, robustness, and ability to handle large amounts of transaction data.

---

## 📂 Repository Structure

```sh
└── api-rest-ignite/
    ├── .env.example
    ├── .env.test.example
    ├── .eslintrc.json
    ├── .gitignore
    ├── db/
    │   └── migrations/
    ├── knexfile.ts
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── @types/
    │   ├── app.ts
    │   ├── env/
    │   ├── middlewares/
    │   ├── routes/
    │   ├── server.ts
    │   ├── tests/
    │   └── utils/
    └── tsconfig.json
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                | Summary                                                                                                                                                                                            |
| ---                                                                                                 | ---                                                                                                                                                                                                |
| [knexfile.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/knexfile.ts)             | This code exports the database configuration from the'database' module to be used in other parts of the application.                                                                               |
| [.env.test.example](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/.env.test.example) | The.env.test.example file sets the environment variables for running tests. It defines the NODE_ENV as "test" and sets the DATABASE_PATH to "./db/test.db" to specify the test database file path. |

</details>

<details closed><summary>Src</summary>

| File                                                                                    | Summary                                                                                                                                                                                                   |
| ---                                                                                     | ---                                                                                                                                                                                                       |
| [app.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/app.ts)       | This code initializes a Fastify server and registers a cookie plugin. It also registers the transactionsRoutes module under the'/transactions' prefix.                                                    |
| [server.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/server.ts) | This code initializes and starts a server using the "app" module. It listens on the specified port defined in the "env" module. Once the server is running, it logs a message indicating the port number. |

</details>

<details closed><summary>Env</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                            |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                |
| [index.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/env/index.ts) | The code reads environment variables, validates them against a predefined schema, and exports the validated variables as the'env' object. It also handles different environment setups for testing and production, and provides default values for some variables. |

</details>

<details closed><summary>@types</summary>

| File                                                                                       | Summary                                                                                                                                                                                                         |
| ---                                                                                        | ---                                                                                                                                                                                                             |
| [knex.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/@types/knex.ts) | The code defines the structure of the "transactions" table in a database using TypeScript and the Knex library. It specifies the columns (id, title, amount, type, created_at) and their respective data types. |

</details>

<details closed><summary>Middlewares</summary>

| File                                                                                                                                | Summary                                                                                                                                                                   |
| ---                                                                                                                                 | ---                                                                                                                                                                       |
| [check-session-id-exist.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/middlewares/check-session-id-exist.ts) | The code is a middleware function that checks if a session id exists in the request cookies. If the session id does not exist, it returns an unauthorized error response. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                      |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                          |
| [database.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/utils/database.ts) | This code exports a configuration object for a sqlite database connection. It uses a filename specified in the environment variable DATABASE_PATH, sets the default value for null, and specifies a directory for migrations. The knexDb object is created using the config. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                      |
| [transactionsRoutes.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/src/routes/transactionsRoutes.ts) | The code in transactionsRoutes.ts defines routes for managing transactions, including retrieving transactions, retrieving a specific transaction by ID, retrieving a summary of transactions, creating a new transaction, and deleting a transaction by ID. It also includes data validation using zod and middleware for checking session ID existence. |

</details>

<details closed><summary>Migrations</summary>

| File                                                                                                                                                                            | Summary                                                                                                                                                                                  |
| ---                                                                                                                                                                             | ---                                                                                                                                                                                      |
| [20230920181102_create-transactions.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/db/migrations/20230920181102_create-transactions.ts)                       | This code creates a migration to create a table named "transactions" in the database. It has columns for id, title, amount, and created_at. The table is dropped in the "down" function. |
| [20230920181203_add_section_id_to_transactions.ts](https://github.com/kaiquecamposdev/api-rest-ignite/blob/main/db/migrations/20230920181203_add_section_id_to_transactions.ts) | This code adds a new column'session_id' to the'transactions' table in the database. The'up' function creates the column, while the'down' function removes it.                            |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the api-rest-ignite repository:
```sh
git clone https://github.com/kaiquecamposdev/api-rest-ignite
```

2. Change to the project directory:
```sh
cd api-rest-ignite
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running api-rest-ignite

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

[↑ Return](#Top)

---
