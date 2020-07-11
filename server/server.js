const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

const loginRoute = require("./routes/login");
const testRoute = require("./routes/test");
const mongoose = require("mongoose");
const authRoute = require("./routes/registration");
const browseRoute = require('./routes/browser');
const createCourseRoute = require("./routes/createCourse");

dotenv.config();
app.use(express.json());

/* console.log that your server is up and running */
app.listen(port, () => console.log(`Listening on port ${port}`));

/* create a GET route */
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT :D" });
});

/* connect to mongodb */
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to db")
);

/* Route middlewares */
app.use("/api/user", loginRoute); //login route
app.use("/api/user", testRoute); //test route
app.use("/api/user", authRoute);
app.use("/api/user", createCourseRoute);
app.use('/api', browseRoute);