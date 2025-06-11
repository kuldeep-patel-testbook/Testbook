const Report = require('../models/Report');
const path = require('path');

const uploadReport = async (req, res) => {

    try {
        if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

        const report = new Report({
            patient: req.body.patientId,
            fileName: req.file.originalname,
            filePath: req.file.path,
            uploadedBy: req.user.id,
            fileType: path.extname(req.file.originalname).replace('.', '')
        });
        res.status(201).json({ message: "Report uploaded", report });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { uploadReport };