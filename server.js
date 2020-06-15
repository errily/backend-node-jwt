const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

//routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/inventory.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})



const Role = db.role;

db.sequelize.sync(); 

    function initial() {
        Role.create({
            id: 1,
            name: "user"
        });

        Role.create({
            id: 2,
            name: "admin"
        });

        Role.create({
            id: 3,
            name: "moderator"
        });
    }

// db.sequelize.sync({ force: true }).then(() => {
//     initial();
// })


 //saat udah ditahap production