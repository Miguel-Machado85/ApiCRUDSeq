const express = require("express")
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
const authService = require("../services/authService");

router.get("/",authService,usuarioController.getUsers);
router.post("/",usuarioController.addUser);
router.put("/:id",authService,usuarioController.updateUser);
router.put("/cambiarEstado/:id",authService,usuarioController.changeUserStatus);

module.exports = router;