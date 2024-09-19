/**
 * Here the file create the 
 * express sever 
 * 
 * @author meganathan
 */

import express, { Request, Response } from "express";
import usersRouter from "./routes/users";

const app = express();

// Define the port number
const PORT = 8000;

// This prefix
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is Starting port on ${PORT}`);
})