const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./database");

const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: "*" }));

app.listen(port, function() {
  console.log("La aplicación esta escuchando en el puerto " + port);
});

app.use("/usuarios", require("./router/usuarios.route"));
app.use("/mascotas", require("./router/mascotas.route"));
