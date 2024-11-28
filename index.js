import express from "express";
import path from "path";
import userRoute from "./routes/user.routes.js"
import mongoose from "mongoose";

const app=express();
const PORT= 8000;

mongoose.connect("mongodb://localhost:27017/blog-it").then(e => console.log("MongoDB Connected"));

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false}));

app.get("/", (req,res)=>{
    res.render("home");
})

app.use("/user",userRoute);

app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));
