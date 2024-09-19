"use strict";
/**
 * Here the file create the
 * express sever
 *
 * @author meganathan
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
// Define the port number
const PORT = 8000;
// This prefix
app.use('/api/users', users_1.default);
app.listen(PORT, () => {
    console.log(`Server is Starting port on ${PORT}`);
});
