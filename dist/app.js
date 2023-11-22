"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const resizeApi_1 = __importDefault(require("./router/resizeApi"));
//loads thr variables into the process
dotenv_1.default.config();
//to start a new express aplication
const app = (0, express_1.default)();
//to log Http requests
app.use((0, morgan_1.default)('tiny'));
//to secure express application by setting various HTTP headers
app.use((0, helmet_1.default)());
//puts thr middleware function at the router path
app.use('/api/images', resizeApi_1.default);
//to start Image Processing Api server
const PORT = process.env.PORT || 3000;
//bind and listen the connections
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
//get the EndPoint
app.get('/', (req, res) => {
    res.status(200).json({ server: 'server is processing' });
});
//limit other EndPoints
app.get('/*', (req, res) => {
    res.status(404).json({ Error: ' Not Found ' });
});
exports.default = app;
