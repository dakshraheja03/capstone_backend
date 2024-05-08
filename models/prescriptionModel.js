import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    medicines: {
        type: Object,
        required: true
    },
    issueDate: {
        type: Date,
        default: Date.now
    },
    expiryDate: {
        type: Date,
        default: function() {
            return new Date(+this.issueDate + 3 * 24 * 60 * 60 * 1000);
        }
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { timestamps: true });

prescriptionSchema.index({ expiryDate: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Prescription", prescriptionSchema);