const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        author: { type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        cargo: {
            type: String,
            required: [true, "el cargo es requerido"],
        },
        experiencia: {
            type: Number,
            required: [true, "los años de experiencia son requeridos"],
        },
        comentario: {
            type: String,
            required: [true, "Se requiere el comentario"],
            maxlength: [500, "500 caracteres maximo"],
            minlength: [50, "50 caracteres minimo"]
        },
        lobueno: {
            type: String,
            required: [true, "Se requiere el comentario"],
            maxlength: [500, "500 caracteres maximo"],
            minlength: [10, "50 caracteres minimo"]
        },
        lomalo: {
            type: String,
            required: [true, "Se requiere el comentario"],
            maxlength: [500, "500 caracteres maximo"],
            minlength: [10, "50 caracteres minimo"]
        },
        //estrellitas
        sueldo: {
            type: Number,
            required: [true],
        },
        entregamateriales: {
            type: Number,
            required: [true],
        },
        ambientedetrabajo: {
            type: Number,
            required: [true],
        },
        liderazgo: {
            type: Number,
            required: [true],
        },
        respetoalosfuncionarios: {
            type: Number,
            required: [true],
        },
        //promedio
        promedio: {
            type: Number,
            required: [true],
        },
    
    },
    { timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);
module.exports = { ReviewSchema, Review };