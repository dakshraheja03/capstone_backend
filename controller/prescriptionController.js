import userModel from "../models/userModel.js";
import prescriptionModel from "../models/prescriptionModel.js"
import mongoose from "mongoose";

//POST PRESCRIPTION
export const postPrescriptionController = async (req, res) => {
        try {
            const { medicines, studentId } = req.body;    
            const newPrescription = new prescriptionModel({
                medicines,
                student: studentId
            });
            await newPrescription.save();   
            res.status(201).json({ message: 'Prescription added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
};

//GET PRESCRIPTION FOR STUDENT (Access by the student)
export const getPrescriptionStudentController = async (req, res) => {
    try {
        const userId = req.student._id;
        const prescriptions = await prescriptionModel.find({ student: userId });
        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//GET PRESCRIPTION FOR STUDENT BY ID (Access by the student)
export const getPrescriptionByIdStudentController = async (req, res) => {
    try {
        const id = req.params.prescriptionId;
        const userId = req.student._id;
        const prescriptions = await prescriptionModel.find({ _id:new mongoose.Types.ObjectId(id),student: userId });
        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//GET PRESCRIPTION FOR STUDENT (Access by the doctor)
export const getPrescriptionDoctorController = async (req, res) => {
    try {
        const userId = req.params.id;
        const prescriptions = await prescriptionModel.find({ student: userId });
        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//GET PRESCRIPTION FOR STUDENT By ID(Access by the doctor)
export const getPrescriptionByIdDoctorController = async (req, res) => {
    try {
        const userId = req.params.id;
        const id = req.params.prescriptionId;
        const prescriptions = await prescriptionModel.find({ _id:new mongoose.Types.ObjectId(id),student: userId });
        res.json(prescriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};