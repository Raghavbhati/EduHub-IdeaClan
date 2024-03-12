const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    try {
        res.send("API is Live, Check API Docs for more info")
    } catch (error) {
        console.log("Server down, error occured", error)
    }
})
app.get("/api/v1", (Req, res)=>{
    try {
        res.send("API is Live, This is version V1")
    } catch (error) {
        console.log("Server down, error occured", error)
    }
})
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err);
});

module.exports = {app}