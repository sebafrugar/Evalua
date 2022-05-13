const { School } = require("../models/school.model");

module.exports.allSchools = (req, res) => {
    console.log("estoy buscando todo");
    School.find().populate("reviews").populate({
         path: 'reviews',
        populate: {
            path: 'author',
            model: 'User'
        }})
        .then(allSchools => res.json({allSchools}))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.schoolById = (req, res) => {
    School.findOne({ _id: req.params.id }).populate("reviews").populate({
            path: 'reviews',
            populate: {
                path: 'author',
                model: 'User'
            }})
        .then(schoolById => res.json({schoolById }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.createNewSchools = (req, res) => {
    console.log(req.body)
    School.create(req.body)
        .then((newSchools)=>res.json({newSchools}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};

module.exports.updateSchools = (req, res) => {
    School.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((school)=>res.json({review: school}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.deleteSchools = (req, res) => {
    console.log(req.params.id)
    School.deleteOne({_id: req.params.id})
        .then((school)=>res.json({resultado: school}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};