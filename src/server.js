const express = require("express");
const cors = require("cors");
const {join} = require("path");
const listEndpoints = require("express-list-endpoints");
const usersRoute = require("./routes/users");
const registerRoute = require("./routes/register");
const mongoose = require("mongoose");
const {
    notFoundHandler,
    forbiddenHandler,
    badRequestHandler,
    genericErrorHandler,
  } = require("./lib/utils/errorHandlers")


//Initial Set-up
const server = express();
const port = process.env.PORT || 3003;
const staticFolderPath = join(__dirname, "../public")
server.use(express.static(staticFolderPath))


//Middlewares
server.use(cors());
server.use(express.json());

//ROUTES
server.use("/users", usersRoute)
server.use("/register", registerRoute)

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
