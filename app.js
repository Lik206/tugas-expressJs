const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000;

app.use(express.json());

// Endpoint untuk menyimpan biodata dengan method POST
app.post('/users', (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;
  const biodata = { nama, tempat_lahir, tanggal_lahir, alamat };
  res.json(biodata);
});

// Endpoint untuk mengambil biodata dengan method GET
app.get('/biodata', (req, res) => {
  
  const { nama = process.env.nama,
     tempat_lahir = process.env.tempat_lahir,
     tanggal_lahir = process.env.tanggal_lahir,
     alamat = process.env.alamat
  } = req.query;
  const biodata = { nama, tempat_lahir, tanggal_lahir, alamat };
  res.json(biodata);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
