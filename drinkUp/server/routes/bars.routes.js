const BarController = require("../controllers/bar.controller");
module.exports = (app) => {
    app.get('/api/bars', BarController.getAllBars);
    app.post('/api/bars', BarController.createBar);
    app.put('/api/bars/:id', BarController.editBar);
    app.delete('/api/bars/:id', BarController.deleteBar);
    //if i change deleteOne command in bar.controller.js file to FindByIdAndDelete, i will have to change above line to reflect
    app.get('/api/bars/:id', BarController.getOneBar);
};

// 
