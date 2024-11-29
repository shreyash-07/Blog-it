import { Router } from "express";
import multer from "multer";
import path from "path";
import Blog from "../models/blog.models.js";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file, cb) {
     const fileName = `${Date.now()}-${file.originalname}`;
     cb(null, fileName);
    },
  })

  const upload = multer({ storage: storage })

router.get("/add-new", (req,res)=>{
    return res.render("addBlog",{
        user: req.user,
    })
})

router.post("/", upload.single("coverImage"), (req,res)=>{
    // const { title, body} = req.body;
    // const blog = await Blog.create({
    // body,
    // title,
    // createdBy: req.user._id,
    // coverImageURL: `/uploads/${req.file.filename}`
    console.log(req.body);
    console.log(req.file);
   //});
   return res.redirect(`/`);
})

export default router;