// arquivo responsável por iniciar o servidor

const app = require("./src/app");

const port = process.env.PORT || 7777;

app.listen(port, (err) => {
  if (err) {
    console.log({ message: err });
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
