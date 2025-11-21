import { processUploadedFile } from "../services/upload.service.js";

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