import express from "express";
import {
    registerController,
    loginController,
    resetController,
    postPassController
} from "../controller/authController.js";

//router object
const router = express.Router();

//REGISTER POST
router.post("/register", registerController);

//LOGIN POST
router.post("/login", loginController);

//FORGOT PASSWORD
router.post("/reset",resetController);
router.post("/reset-confirm/:token",postPassController)

export default router;
