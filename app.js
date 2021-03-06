const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { DB_HOST, PORT = 3000 } = process.env;

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");
const filesRouter = require("./routes/api/files");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);
app.use("/api/files", filesRouter);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});
