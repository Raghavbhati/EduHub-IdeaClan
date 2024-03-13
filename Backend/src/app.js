const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {ApolloServer} = require("@apollo/server")
const  { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./graphql/index")

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
})

async function startServer() {
    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use(cookieParser())
    app.use(express.urlencoded({
        extended : true
    }))
    app.use(express.static("public"));
    app.use("/graphql", expressMiddleware(server))

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
    return app;
}

module.exports = {startServer}
