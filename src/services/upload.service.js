import { validateFileType } from "../utils/fileValidator.js";  

export function processUploadedFile(file, baseUrl) {

    // Validar tipo
    if (!validateFileType(file)) {
        throw new Error('Invalid file type. Only JPG, PNG, and GIF are allowed.');
    }

    // Validar tamaño 2MB
    if (file.size > 2 * 1024 * 1024) {
        throw new Error('File size exceeds the 2MB limit.');
    }

    // Construir URL 
    const imageUrl = `${baseUrl}/uploads/${file.filename}`;

    return { filename: file.filename, url: imageUrl };
}