const { response } = require("express");
const Bar = require("../models/bar.model");

module.exports= {
    createBar: (request, response) => {
        Bar.create(request.body)
            .then((newBar) => {
                response.json(newBar);
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json(err);
            });
    },

    getOneBar: (request, response) => {
        Bar.findById({ _id: request.params.id })
        .then((oneBar)=> {
            response.json(oneBar);
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
        });
    },

    getAllBars: (request, response) => {
        Bar.find({})
        .collation({ locale: "en", strength: 2 })
        .sort({ BarName: 1 })
        .then((allBars) => {
            response.json(allBars);
        })
        .catch((err)=> {
            console.log(err);
            response.status(400).json(err);
        });
    },

    //maybe change line 42 to findByIdAndDelete
    deleteBar: (request, response) => {
        Bar.deleteOne({ _id: request.params.id})
            .then((deletedBar) => {
                console.log("deleted");
                response.json(deletedBar);
            })
            .catch((err)=> {
                console.log(err);
                response.json(deletedBar);
            });
    },

    //maybe change line 59 to true
    editBar: (request, response) => {
        console.log(request.body);
        console.log(request.params);
        Bar.findByIdAndUpdate({ _id: request.params.id}, request.body, {
            new:true,
            runValidators:false,
        })
            .then((updatedBar) => {
                console.log("SUCCESS");
                console.log(updatedBar);
                response.json(updatedBar);
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
                reponse.status(400).json(err);
            });
    },
};

//
