import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Middleware function to check if user is an student
export const requiresStudent = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded._id);
      if (user.role === 0) {
          req.student = user;
          next();
      } else {
          res.status(403).json({ message: 'Forbidden Access' });
      }
  } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware function to check if user is a doctor/receptionist
export const requiresDoctor = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded._id);
      if (user.role == 1) {
          req.doctor = decoded;
          next();
      } else {
        console.log("here")
          res.status(403).json({ message: 'Forbidden Access' });
      }
  } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware function to check if user is a Admin
export const requiresAdmin = async (req, res, next) => {
  try {
      const token = req.headers.authorization;
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      if (decoded.role === 2) {
          req.admin = decoded;
          next();
      } else {
          res.status(403).json({ message: 'Forbidden Access' });
      }
  } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Unauthorized' });
  }
};