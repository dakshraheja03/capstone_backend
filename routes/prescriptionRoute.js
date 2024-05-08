import express from "express";
import {
    postPrescriptionController,
    getPrescriptionStudentController,
    getPrescriptionByIdStudentController,
    getPrescriptionDoctorController,
    getPrescriptionByIdDoctorController
} from "../controller/prescriptionController.js";
import { requiresDoctor, requiresStudent } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//POST PRESCRIPTION
router.post("/", requiresDoctor ,postPrescriptionController);
//GET ALL PRESCRIPTION FOR A STUDENT (Access by a student)
router.get("/student",requiresStudent,getPrescriptionStudentController)
//GET ONE PRESCRIPTION FOR A STUDENT (Access by a student)
router.get("/student/:prescriptionId",requiresStudent,getPrescriptionByIdStudentController)
//GET PRESCRIPTION FOR A STUDENT (Access by a doctor)
router.get("/doctor/:id",requiresDoctor,getPrescriptionDoctorController)
//GET ONE PRESCRIPTION FOR A STUDENT (Access by a doctor)
router.get("/doctor/:id/:prescriptionId",requiresDoctor,getPrescriptionByIdDoctorController)

export default router;
