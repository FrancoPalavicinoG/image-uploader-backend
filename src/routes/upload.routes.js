import { Router } from "express";
import upload from "../config/storage.js";
import { uploadImage } from "../controllers/upload.controller.js";

const router = Router();

router.post('/upload', upload.single('image'), uploadImage);

export default router;
