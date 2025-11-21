import { Router } from "express";
import upload from "../config/storage.js";
import { uploadImage, downloadImage } from "../controllers/upload.controller.js";

const router = Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/download/:filename', downloadImage);

export default router;