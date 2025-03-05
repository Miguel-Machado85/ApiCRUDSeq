const express = require("express")
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

router.get("/",usuarioController.getUsers);
router.post("/",usuarioController.addUser);
router.put("/:id",usuarioController.updateUser);
router.put("/cambiarEstado/:id",usuarioController.changeUserStatus);

module.exports = router;