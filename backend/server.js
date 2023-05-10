require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const EducationRoute = require("./routes/EducationRoute");
const WorkExperienceRoute = require("./routes/WorkExperienceRoute");
const SkillRoute  = require("./routes/SkillRoute");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/EducationRoute", EducationRoute);
app.use("/api/WorkExperienceRoute", WorkExperienceRoute);
app.use("/api/ProjectRoute",require('./routes/ProjectRoute'));
app.use("/api/SkillRoute",SkillRoute);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));