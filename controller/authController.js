const { Usuario } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const usuario = await Usuario.finOne({ where: {email}});

        if(!usuario){
            return res.status(400).json({error:"No existe el usuario"});
        }

        const passwordGood = usuario.validarContraseña(password);

        if(!passwordGood){
            return res.status(401).json({error:"Contraseña incorrecta"})
        }

        const token = jwt.sign(
            {id: usuario.id, email: usuario.email},
            process.env.JWT_SECRET,
            { expiresIn : "1h"}
        )
    } catch (error) {
        return res.status(500).json({error:"Error en el servidor"})
    }
}

module.exports = {login}