const allowedExtensions = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

export function validateFileType(file) {
    if(!file) return false;
    return allowedExtensions.includes(file.mimetype);
}