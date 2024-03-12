const {app} = require("./app");
const {ConnectToDB} = require("./db/db");
require("dotenv").config({path:"./.env"})

const PORT = process.env.PORT;

ConnectToDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is live on port no. ${PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo DB Connection Failed", error)
})