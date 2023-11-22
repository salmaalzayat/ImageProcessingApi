"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeApi_1 = require("../router/resizeApi");
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
// create a request object
const request = (0, supertest_1.default)(app_1.default);
describe(' Tests', () => {
    it('expected to cashe the image file after processing', () => {
        const image = '.\\Cashe\\fjord.jpg444444.jpg';
        if (fs_1.default.existsSync(image)) {
            fs_1.default.unlinkSync(image);
        }
        (0, resizeApi_1.imageResize)('444', '444', 'fjord.jpg');
        setTimeout(() => {
            expect(fs_1.default.existsSync(image)).toBeTrue();
        }, 100);
    });
    it('limit other EndPoints', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/*');
        expect(response.status).toBe(404);
    }));
    it('get the EndPoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
    it('gets the image endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?imageName=fjord&height=400&width=444');
        expect(response.status).toBe(200);
    }));
});
