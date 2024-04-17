require("module-alias/register");
const path = require("path");
const { readdirSync } = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

const routes = require("@routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
var corsOptions = {
  origin: "http://localhost:5500",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "book.html"));
});

readdirSync(__dirname + "/public/").map((f) =>
  app.get(`/${f}`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", f));
  })
);

app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is up and running on PORT: ${port}`)
);
