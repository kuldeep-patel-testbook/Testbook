const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'patients',
        required:true
    },
    fileName: String,
    filepath: String,
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    fileType: {
        type: String,
        enum: ['pdf', 'dicom', 'image', 'other'],
        default: 'pdf'
    },
}, {timestamps: true});

module.exports = mongoose.model('reports', reportSchema);