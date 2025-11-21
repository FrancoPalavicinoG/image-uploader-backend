import multer from "multer";
import path from "path";

// carpeta uploads
const uploadDir = 'src/public/uploads';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    }, 
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, unique + extension);
    }, 
}); 

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

export default upload;