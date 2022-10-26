// Import controller
const heroController = require("../controllers/hero.controller")

//Define Routes
module.exports = app => {
    //Create a new hero app.post
    app.post("/api/hero/new", heroController.createHero);

    //Read (Display) all heroes app.get
    app.get("/api/heroes", heroController.findAllHeroes);

    //Read (Display) one hero app.get
    app.get("/api/hero/:id", heroController.displayHero);

    //Update a hero app.put
    app.put("/api/hero/update/:id", heroController.updateHero);

    //Delete (Destroy) a hero app.delete
    app.delete("/api/hero/delete/:id", heroController.deleteHero);
};