import express from "express";
import path from "path";
import userRoute from "./routes/user.routes.js"
import blogRoute from "./routes/blog.routes.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { checkForAuthenticationCookie } from "./middlewares/authentication.middleware.js";
import Blog from "./models/blog.models.js";
import { fileURLToPath } from "url";


const app=express();
const PORT= 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the public directory
app.use("/public", express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/blog-it").then(e => console.log("MongoDB Connected"));

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

app.get("/", async (req,res)=>{
    const allBlogs = await Blog.find({})
    res.render("home",{
        user: req.user,
        blogs: allBlogs,
    })
})

// app.get("/", async (req,res)=>{
//     const allBlogs = await Blog.find({});
//     res.render("home",{
//         user: req.user,
//         blogs: allBlogs,
//     });
// })

app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));
