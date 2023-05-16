//BIBLIOTECAS/MODULOS UTILIZADOS
const database = require("./db/db");
const express = require("express");
const app = express();
const hand = require("express-handlebars")

//MODELS
const Filme = require("./models/Filme");
const FilmeRoutes = require("./routes/routesFilme");
//CONTROLLERS
const FilmesControllers = require("./controllers/ControllerFilme");
//SINCRONISMO COM O BANCO DE DADOS
try {
 database.sync().then(() => {
 app.listen(9443,() => { console.log('Servidor rodando') });
 })
}
catch(erro) {
 console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};
//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", FilmeRoutes);