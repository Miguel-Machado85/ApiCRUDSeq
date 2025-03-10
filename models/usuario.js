'use strict';
const { Model, DataTypes, STRING } = require('sequelize');
const bcrypt = require("bcryptjs");
 
module.exports = (sequelize) => {
  class Usuario extends Model {
    static associate(models) {
      // Definir asociaciones aquí si es necesario
    }

    async validarContraseña(password){
      return await bcrypt.compare(password, this.password);
    }

  }

  
 
  Usuario.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente
        allowNull: false,
        primaryKey: true, // Define 'id' como clave primaria
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Evita correos duplicados
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Activo",
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuario", // Especificar nombre de la tabla
      timestamps: true, // Agrega createdAt y updatedAt

      hooks:{
        beforeCreate: async (usuario) => {
          const cifrado = await bcrypt.getSalt(10);
          usuario.password = await bcrypt.hash(usuario.password, cifrado);
        }
      }
    }
  );
 
  return Usuario;
};