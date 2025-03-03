const { Usuario } = require("../models");

const getUsers = async (req, res) =>{
    try{
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports ={
    getUsers
}