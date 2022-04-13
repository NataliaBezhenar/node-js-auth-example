const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { DB_HOST, PORT = 3000 } = process.env;

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

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
