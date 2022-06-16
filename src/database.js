const mongoose = require("mongoose");
<<<<<<< HEAD

//URL = "mongodb://localhost/BdAdopciones";

//URL = "mongodb://localhost/BdAdopciones";
=======
// URL = "mongodb://localhost/BdAdopciones";

>>>>>>> f19d65173bb76ca394c9200cfbc44d4dbb441e91
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
