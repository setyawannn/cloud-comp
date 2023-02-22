const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const { db } = require("./model/dbConnection")

const app = express()
const port = 8000


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Get All Guru
app.get("/api/getAll", (req, res) => {
  const sqlQuery = "SELECT * FROM guru"

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})

// Get Guru by ID
app.get("/api/getGuru/:id_guru", (req, res) => {
  const idGuru = req.params.id_guru;

  const sqlQuery = "SELECT * FROM guru WHERE id_guru = ?"
  db.query(sqlQuery, idGuru, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})

// Create Guru
app.post("/api/createGuru", (req, res) => {
  const namaGuru = req.body.nama_guru;
  const mapelGuru = req.body.mapel_guru;
  const sekolahGuru = req.body.sekolah_guru;

  const sqlQuery = "INSERT INTO guru (nama_guru, mapel_guru, sekolah_guru) VALUE (?, ?, ?)"
  db.query(sqlQuery, [namaGuru, mapelGuru, sekolahGuru], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})

// Update Guru by ID
app.put("/api/updateGuru", (req, res) => {
  const namaGuru = req.body.nama_guru;
  const mapelGuru = req.body.mapel_guru;
  const sekolahGuru = req.body.sekolah_guru;
  const idGuru = req.body.id_guru;

  const sqlQuery = "UPDATE guru SET nama_guru = ?, mapel_guru = ?, sekolah_guru = ? WHERE id_guru = ?";
  db.query(sqlQuery, [namaGuru, mapelGuru, sekolahGuru, idGuru], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})

// Delete Guru by ID
app.delete("/api/deleteGuru", (req, res) => {
  const idGuru = req.body.id_guru;

  const sqlQuery = "DELETE FROM guru WHERE id_guru = ?"

  db.query(sqlQuery, idGuru, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))