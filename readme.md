# Visually Log In Page Tests

![Cypress Tests](https://github.com/benjaminpinto/Visually/actions/workflows/main.yml/badge.svg)

This project is a result of a code challenge that demands write test cases for [Visually's log in page](https://visual.ly/user/login).

To write these tests, I've used a few plugins to extend Cypress capabilities and to check the code syntax:

- [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro/);
- [eslint](https://eslint.org/docs/user-guide/getting-started) and [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress);

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I've used versions `v16.15.0` and `8.5.5` of Node.js and npm, respectively. I recommend you to use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run open` to open Cypress in interactive mode.

> **Note:** This project handle sensible data to perform tests (email and password), so I am using a non versioned `cypress.env.json` file to keep these data safe. At the project folder, you will find the file [`cypress.env.example.json`](/cypress.env.example.json), make a copy of it and insert your credentials at Visually. If you pretend to put this project at your own repository, remember to include this data on your environment variables.

> **Important:** This project uses Github actions to implement CI. If you want to clone it and run at your own repository, remember to update project's ID at [`cypress.config.js`](./cypress.config.js) file, and set your CYPRESS_RECORD_KEY at Github secrets.

## About the project structure

- Spec files are localized at [`cypress/e2e`](/cypress/e2e/) folder;
- Custom commands are organized at [`support`](cypress/support) folder;
- Github Actions is properly configured and the project tests results are connected with Cypress Dashboard. I've configured parallelization with 4 threads at Github Actions, but considering that I've reached my monthly free tier limit, just one thread is in fact executing all spec files.

## Test Cases

#### Sign In page

| ID  | Title                                                  | Given                                               | When                                                         | Then                                                                 | Automated? | Passing? | Issue? | Obs |
| --- | :----------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- | :--------: | :------: | :----: | :-: |
| 01  | Check if cookie policy message is properly shown       | User have not accepted cookies before (new session) | Visit /user/login                                            | A modal window asking to accept the privacy policy should be visible |     ✅     |    🟢    |   -    |  -  |
| 02  | Check the visibility of main elements                  | The user is at log in page                          | The page loads                                               | Logo, links, buttons and input fields should be visible              |     ✅     |    🟢    |   -    |  -  |
| 03  | Check 'Forgot password' exhibition                     | The user is at log in page                          | User clicks 'Forgot password' link                           | A modal window should appear, making possible reset it               |     ✅     |    🟢    |   -    |  -  |
| 04  | Test login without provide credentials (types nothing) | The user is at log in page                          | User clicks 'Log in', but haven't typed an email or password | A message of required fields should be visible                       |     ✅     |    🟢    |   -    |  -  |
| 05  | Test login providing wrong credentials                 | The user is at log in page                          | User types 'wrong' at username and password fields           | A message of unrecognized username or password should be visible     |     ✅     |    🟢    |   -    |  -  |
| 06  | Test login providing correct credentials               | The user is at log in page                          | User types correct email and password                        | He should be correctly logged in and redirected to /view             |     ✅     |    🟢    |   -    |  -  |

---

This project was created by [Benjamin Pinto](https://www.linkedin.com/in/benjamin-pinto/).
