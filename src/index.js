const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const { db } = require("./model/dbConnection")

const app = express()
const port = 8000

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get All Guru
app.get("/api/guru/v1/", (req, res) => {
  const sqlQuery = "SELECT * FROM guru";

  db.query(sqlQuery, (err, guru) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ guru, message: "Get all guru" });
      console.log(guru);
    }
  });
});

// Get Guru by ID
app.get("/api/guru/v1/:id_guru", (req, res) => {
  const idGuru = req.params.id_guru;

  const sqlQuery = "SELECT * FROM guru WHERE id_guru = ?";
  db.query(sqlQuery, idGuru, (err, guru) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ guru, message: "Get single guru" });
      console.log(guru);
    }
  });
});

// Create Guru
app.post("/api/guru/v1/create", (req, res) => {
  const namaGuru = req.body.nama_guru;
  const mapelGuru = req.body.mapel_guru;
  const sekolahGuru = req.body.sekolah_guru;

  const sqlQuery =
    "INSERT INTO guru (nama_guru, mapel_guru, sekolah_guru) VALUE (?, ?, ?)";
  db.query(sqlQuery, [namaGuru, mapelGuru, sekolahGuru], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ data, message: "Success add new guru" });
      console.log(data);
    }
  });
});

// Update Guru by ID
app.put("/api/guru/v1/:id_guru/update", (req, res) => {
  const namaGuru = req.body.nama_guru;
  const mapelGuru = req.body.mapel_guru;
  const sekolahGuru = req.body.sekolah_guru;
  const idGuru = req.params.id_guru;

  const sqlQuery =
    "UPDATE guru SET nama_guru = ?, mapel_guru = ?, sekolah_guru = ? WHERE id_guru = ?";
  db.query(
    sqlQuery,
    [namaGuru, mapelGuru, sekolahGuru, idGuru],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ data, message: "Success update guru" });
        console.log(data);
      }
    }
  );
});

// Delete Guru by ID
app.delete("/api/guru/v1/:id_guru", (req, res) => {
  const idGuru = req.params.id_guru;

  const sqlQuery = "DELETE FROM guru WHERE id_guru = ?";

  db.query(sqlQuery, idGuru, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "Success delete guru" });
      console.log(data);
    }
  });
});

app.listen(port, () =>
  console.log(`This service is running well, listening on port ${port}!`)
);