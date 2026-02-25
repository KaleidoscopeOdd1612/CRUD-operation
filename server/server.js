import express from 'express';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './Middleware/logger.js';
import errorHandler from './Middleware/error.js';
import notFound from './Middleware/notFound.js';
const port = process.env.PORT;

//Get current path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// enable cors
app.use(cors());

// setup static folder
app.use(express.static(path.join(__dirname, 'pages')));

// Body parser middleware
app.use(express.json()); // for raw data
app.use(express.urlencoded({ extended: false })); // for form-urlencoded data

// use our middleware everywhere
app.use(logger);

// Routes
app.use('/api/posts', posts);

// Not found error
app.use(notFound);
// Error middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));