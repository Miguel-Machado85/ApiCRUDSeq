require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

//Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})