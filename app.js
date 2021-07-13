const express = require("express");
const Error = require("./middleware/error");
const orgsRoutes = require("./routes/orgs");
const depsRoutes = require("./routes/deps");
const posRoutes = require("./routes/positions");
const userRoutes = require("./routes/users");
const empRoutes = require("./routes/emps");
const Login = require("./routes/login");
//Database
const db = require("./config/database");

//Test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.use(express.json());
app.use("/orgs", orgsRoutes);
app.use("/deps", depsRoutes);
app.use("/pos", posRoutes);
app.use("/user", userRoutes);
app.use("/emp", empRoutes);
app.use("/login", Login);
app.use(Error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
