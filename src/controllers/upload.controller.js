import { processUploadedFile } from "../services/upload.service.js";
import path from "path";
import { fileURLToPath } from "url";

export async function uploadImage(req, res) {
    try {
        const file = req.file;
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        const result = processUploadedFile(file, baseUrl);
        return res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            url: result.url,
            filename: result.filename,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function downloadImage(req, res) {
    const { filename } = req.params;

    const filePath = path.join(__dirname, "../public/uploads", filename);

    return res.download(filePath, (err) => {
        if (err) {
            return res.status(404).json({
                success: false,
                message: "File not found"
            });
        }
    });
}