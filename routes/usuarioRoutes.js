const express = require("express")
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

router.get("/",usuarioController.getUsers);

module.exports = router;