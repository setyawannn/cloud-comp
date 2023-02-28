# Usage

Click Use this api and then create new repository

SQL Command Syntax

```bash
  # create database
  CREATE DATABASE (database_name);
  
  # create table
  CREATE TABLE `guru` (
  `id_guru` int(11) AUTO_INCREMENT PRIMARY_KEY,
  `nama_guru` varchar(255),
  `mapel_guru` varchar(255),
  `sekolah_guru` varchar(255)
  );

  # insert guru
  INSERT INTO 'guru' (nama_guru, mapel_guru, sekolah_guru) VALUES (?, ?, ?)
  
  # update guru
  UPDATE 'guru' SET nama_guru = ?, mapel_guru = ?, sekolah_guru = ? WHERE id_guru = ?
  
  # delete guru
  DELETE FROM 'guru' WHERE id_guru = ?
```

Install `node_modules` on this project

```bash
  npm Install

  # use yarn
  yarn
```

After that, you can setup the database. go to model and edit `dbConnection.js`.

```bash
const db = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cloud_api"
})
```

Run the project

```bash
  npm run start

  # use yarn
  yarn start
```

# API Spec

## Get all guru

Request :

- Method : GET
- Endpoint : `/api/guru/v1`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "guru": [
    {
      "id_guru": "number",
      "nama_guru": "string",
      "mapel_guru": "string",
      "sekolah_guru": "string"
    }
  ],
  "message": "string"
}
```

## Get guru by id

Request :

- Method : GET
- Endpoint : `/api/guru/v1/{id_guru}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "guru": [
    {
      "id_guru": "number",
      "nama_guru": "string",
      "mapel_guru": "string",
      "sekolah_guru": "string"
    }
  ],
  "message": "string"
}
```

## Create guru

Request :

- Method : POST
- Endpoint : `/api/guru/v1`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "nama_guru": "string",
  "mapel_guru": "string",
  "sekolah_guru": "string"
}
```

Response :

```json
{
  "message": "string"
}
```

## Update guru

Request :

- Method : PUT
- Endpoint : `/api/guru/v1/{id_guru}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "nama_guru": "string",
  "mapel_guru": "string",
  "sekolah_guru": "string"
}
```

Response :

```json
{
  "data": {
    "id_guru": "number",
    "nama_guru": "string",
    "mapel_guru": "string",
    "sekolah_guru": "string"
  },
  "message": "string"
}
```

## Delete guru

Request :

- Method : DELETE
- Endpoint : `/api/guru/v1/{id_guru}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "message": "string"
}
```

## Authors

- [@setyawannn](https://www.github.com/setyawannn)
- [@kkafi09](https://www.github.com/kkafi09)
