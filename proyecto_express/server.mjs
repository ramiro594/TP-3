import express from "express";
const app = express();
const PORT = 3000;

//Ruta GET con parametro de consulta
//Solicitud : http://localhost:3000/profile?edad=19
app.get("/profile", (req, res) => {
  const edad = req.query.edad;
  console.log(`Edad recibida: ${edad}`);
  res.send(`Tienes ${edad} años`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
