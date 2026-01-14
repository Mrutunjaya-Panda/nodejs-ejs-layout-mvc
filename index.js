import express from "express";
import path from "path";
import { userController } from "./src/controllers/users.controller.js";
import ejsLayouts from 'express-ejs-layouts';
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(ejsLayouts);


app.get("/", userController);

export default app;
