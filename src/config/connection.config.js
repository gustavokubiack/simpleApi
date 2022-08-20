const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
try {
  console.log("Conectado ao MongoDB");
} catch (err) {
  console.log("Erro ao conectar ao MongoDB" + { message: err });
}
