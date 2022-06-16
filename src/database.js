const mongoose = require("mongoose");
<<<<<<< HEAD
=======


// URL=('mongodb://localhost/bdmascotas');

URL=('mongodb+srv://LauCaicedo:diaz18210@cluster0.gyn1k.mongodb.net/BaseDeDatosAdopciones?retryWrites=true&w=majority');

// URL = "mongodb://localhost/BdAdopciones";
// >>>>>>> 3174bf3f14fea07a9cc49bfca8dfce1cafa27be8

>>>>>>> e793c7001a0868b7dd6fa7c72346684660a078b5

//URL = "mongodb://localhost/BdAdopciones";

//URL = "mongodb://localhost/BdAdopciones";

// URL = "mongodb://localhost/BdAdopciones";

<<<<<<< HEAD
=======

>>>>>>> e793c7001a0868b7dd6fa7c72346684660a078b5
URL =
  "mongodb+srv://LauCaicedo:diaz18210@cluster0.gyn1k.mongodb.net/BaseDeDatosAdopciones?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Base de datos conectada:", db.connection.name))
  .catch((error) => console.log(error));

module.exports = mongoose;
