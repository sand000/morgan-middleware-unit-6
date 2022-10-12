const express = require('express');
const morgan = require('morgan');
const port = 5000;

const app = express();

morgan.token("type", function (req, res) {
    return req.headers["content-type"];
});

app.use(morgan(":method :url HTTP/:http-version :status :res[content-length] - :response-time ms :date[web]:type"))

app.get("/", (req, res) => {
    res.send("hello home");
})

app.get("/about", (req, res) => {
    res.send("about");
})

app.listen(port, (req, res) => {
    console.log("listening on port " + port);
});