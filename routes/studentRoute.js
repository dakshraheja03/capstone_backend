import express from "express";
import {
    getStudentProfileController,
    getStudentsController,
} from "../controller/studentController.js";
import { requiresStudent } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//GET STUDENT PROFILE
router.get("/profile", requiresStudent ,getStudentProfileController);
//GET ALL STUDENTS
router.get("/",getStudentsController)

export default router;
