

import mongoose from 'mongoose';

const MedicalRecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  prescriptions: [{
    medicine: String,
    dosage: String,
    frequency: String,
    // Add more fields related to prescriptions as needed
  }],
  testResults: [{
    testType: String,
    result: String,
    // Add more fields related to test results as needed
  }],
  // Other fields such as notes, treatment plans, etc.
}, { timestamps: true });

const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

export default MedicalRecord;