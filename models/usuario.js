const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = require("../config").secret;

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome não pode ser vazio."]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "O email não pode ser vazio."],
        index: true,
        match: [/\S+@\S+\.\S+/, "E-mail inválido."]
    },
    loja: {
        type: Schema.Types.ObjectId,
        ref: "Loja",
        required: [true, "Loja não pode ser vazia."]
    },
    permissao: {
        type: Array,
        default: ["cliente"]
    },
    hash: String,
    salt: String,
    recovery: {
        type: {
            token: String,
            date: Date
        },
        default: {}
    }
},{ timestamps: true });