import { Router } from "express";
import User from "../models/user.models.js";

const router = Router();

router.get("/signin", (req,res)=>{
    return res.render("signin");
})

router.get("/signup", (req,res)=>{
    return res.render("signup");
})

router.post("/signin", async (req,res)=>{
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);

        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("signin",{
            error: "Incorrect Email or Password"
        })
    }
})

router.get("/logout", (req,res)=>{
    res.clearCookie("token").redirect("/"); 
})

router.post("/signup", async(req,res)=>{
    const { fullName, email, password }= req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");
})

// router.get("/", (req, res) => {
//     res.render("home", {
//       user: req.user, // Assuming `req.user` contains logged-in user details
//     });
//   });
  
export default router;