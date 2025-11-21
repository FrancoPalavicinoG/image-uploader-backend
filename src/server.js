import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from "morgan";
import uploadRoutes from './routes/upload.routes.js';   

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/uploads', express.static('src/public/uploads'));
app.use('/api', uploadRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});