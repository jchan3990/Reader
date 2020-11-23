# Reader
Allows users to read their favorite books with the ability to highlight and
save specific / memorable passages.

## Usage ##
> Webpack compile 'npm run react-dev'
```
webpack -d --watch
```
> Start server 'npm start'
```
nodemon server/index.js
```
> Postgres schema to save passges:
```
createdb reader
psql -d reader < schema.sql
```

## Requirements ##
An `nvmrc` file is included if using [nvm](https://github.com/nvm-sh/nvm).
* Node v14.2.0
* etc

Must have [Postgres](https://www.npmjs.com/package/postgres) installed for database.
* Inside the root dir:
  - createdb reader
  - psql -d reader < schema.sql

## Development ##
From within the root directory:
```
npm install
```
