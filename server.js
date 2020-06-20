const express = require("express");

const app = express();

//app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api/user", require("./routes/user.route"));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});