const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./src/routes/users.routes");
const departmentRouter = require("./src/routes/department.routes");
const timeLineRouter = require("./src/routes/timeline.routes");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(morgan("tiny"));
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
app.use("/users", usersRouter);
app.use("/department", departmentRouter);
app.use("/timeline", timeLineRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const URI = process.env.URI;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);
// module.exports = app;
