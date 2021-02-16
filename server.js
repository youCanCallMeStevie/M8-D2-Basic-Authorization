const express = require("express");
const cors = require("cors");
const {join} = require("path");
const listEndPoints = require("express-list-endpoints");
const usersRoute = require("./src/routes/users");
const registerRoute = require("./src/routes/register");
const mongoose = require("mongoose");
const cors = require("cors");
const {
    notFoundHandler,
    forbiddenHandler,
    badRequestHandler,
    genericErrorHandler,
  } = require("./src/lib/utils/errorHandlers")


//Initial Set-up
const server = express();
const port = process.env.PORT || 3003;

//Middlewares
server.use(cors());
server.use(express.json());


//ERROR HANDLERS
server.use(badRequestHandler)
server.use(forbiddenHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndpoints(server))

mongoose.set("debug", true)

mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port)
    })
  )
  .catch(err => console.log(err))
