const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const taskRoutes = require("./routes/tasks.routes");
const url = process.env.URL;
// ejsLint('../Views/Home.ejs',{await : true});
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use("/api/tasks", taskRoutes);
app.use(express.static('./public'));
app.use(express.static(__dirname + `/views`));

app.get("/", (req, res) => {
  res.send("heyy! I am a NodeJS/Express Server..");
})

mongoose
  .connect(url)
  .then(() => {
    app.listen(8500, () => {
      console.log("app is running on port 8500 And connected to Database");
      console.log(__dirname);
    });
  })
  .catch((err) => console.log(err));
