const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create subdirectories based on file type
    let subDir = 'documents';
    
    if (file.fieldname === 'patientDocuments') {
      subDir = 'patients';
    } else if (file.fieldname === 'physicianDocuments') {
      subDir = 'physicians';
    } else if (file.fieldname === 'resourceDocuments') {
      subDir = 'resources';
    }
    
    const finalDir = path.join(uploadDir, subDir);
    if (!fs.existsSync(finalDir)) {
      fs.mkdirSync(finalDir, { recursive: true });
    }
    
    cb(null, finalDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${uniqueSuffix}${ext}`);
  }
});

// File filter function
const fileFilter = (req, file, cb) => {
  // Define allowed file types
  const allowedTypes = {
    image: /\.(jpg|jpeg|png|gif|webp)$/i,
    document: /\.(pdf|doc|docx|txt|rtf)$/i,
    medical: /\.(dcm|jpg|jpeg|png|pdf|doc|docx)$/i,
    general: /\.(jpg|jpeg|png|gif|webp|pdf|doc|docx|txt|rtf|csv|xlsx|xls)$/i
  };
  
  const ext = path.extname(file.originalname).toLowerCase();
  
  // Check file type based on field name or use general validation
  let isValid = false;
  
  if (file.fieldname.includes('image') || file.fieldname.includes('photo')) {
    isValid = allowedTypes.image.test(ext);
  } else if (file.fieldname.includes('medical')) {
    isValid = allowedTypes.medical.test(ext);
  } else {
    isValid = allowedTypes.general.test(ext);
  }
  
  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type. Allowed types: ${Object.values(allowedTypes).join(', ')}`), false);
  }
};

// Configure multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB default
    files: 10 // Maximum 10 files per upload
  },
  fileFilter: fileFilter
});

// Middleware for single file upload
const uploadSingle = (fieldName) => {
  return (req, res, next) => {
    const singleUpload = upload.single(fieldName);
    
    singleUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            success: false,
            message: 'File too large. Maximum size is 5MB.'
          });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({
            success: false,
            message: 'Too many files. Maximum 10 files allowed.'
          });
        }
        return res.status(400).json({
          success: false,
          message: 'File upload error: ' + err.message
        });
      } else if (err) {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      next();
    });
  };
};

// Middleware for multiple file upload
const uploadMultiple = (fieldName, maxCount = 10) => {
  return (req, res, next) => {
    const multipleUpload = upload.array(fieldName, maxCount);
    
    multipleUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            success: false,
            message: 'File too large. Maximum size is 5MB.'
          });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({
            success: false,
            message: `Too many files. Maximum ${maxCount} files allowed.`
          });
        }
        return res.status(400).json({
          success: false,
          message: 'File upload error: ' + err.message
        });
      } else if (err) {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      next();
    });
  };
};

// Middleware for mixed file upload (multiple fields)
const uploadFields = (fields) => {
  return (req, res, next) => {
    const fieldsUpload = upload.fields(fields);
    
    fieldsUpload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({
            success: false,
            message: 'File too large. Maximum size is 5MB.'
          });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({
            success: false,
            message: 'Too many files uploaded.'
          });
        }
        return res.status(400).json({
          success: false,
          message: 'File upload error: ' + err.message
        });
      } else if (err) {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      next();
    });
  };
};

// Utility function to delete uploaded file
const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting file:', error);
    return false;
  }
};

// Process uploaded files to extract metadata
const processUploadedFiles = (req, res, next) => {
  if (req.files || req.file) {
    const files = [];
    
    // Handle single file
    if (req.file) {
      files.push({
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path,
        fieldname: req.file.fieldname
      });
    }
    
    // Handle multiple files
    if (req.files) {
      if (Array.isArray(req.files)) {
        // Array of files from single field
        req.files.forEach(file => {
          files.push({
            filename: file.filename,
            originalName: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            path: file.path,
            fieldname: file.fieldname
          });
        });
      } else {
        // Object with multiple fields
        Object.keys(req.files).forEach(fieldname => {
          req.files[fieldname].forEach(file => {
            files.push({
              filename: file.filename,
              originalName: file.originalname,
              mimetype: file.mimetype,
              size: file.size,
              path: file.path,
              fieldname: file.fieldname
            });
          });
        });
      }
    }
    
    req.processedFiles = files;
  }
  
  next();
};

module.exports = {
  upload,
  uploadSingle,
  uploadMultiple,
  uploadFields,
  processUploadedFiles,
  deleteFile
};