const express = require("express");
const morgan = require("morgan");
const app = express();

const taskRouter = require("./routes/task.routes");

app.use(morgan("dev"));
app.use(express.json());

app.use(taskRouter);
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000);
console.log("server on port 4000");
