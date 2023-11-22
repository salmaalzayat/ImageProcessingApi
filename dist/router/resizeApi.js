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
exports.imageResize = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const middleware_1 = __importDefault(require("../utilis/middleware"));
//to create a new router object
const routes = express_1.default.Router();
const imagesChoices = [
    'palmtunnel.jpg',
    'icelandwaterfall.jpg',
    'encenadaport.jpg',
    'santamonica.jpg',
    'fjord.jpg',
];
routes.get('/', middleware_1.default, (req, res) => {
    const apiResize = req.query;
    const imageName = apiResize.imageName + '.jpg';
    const height = apiResize.height;
    const width = apiResize.width;
    if (!imagesChoices.includes(imageName)) {
        // Handle unvaild image name value
        return res.status(404).json({ Error: 'Please pass a valid image name ' });
        // Handle unvaild height value
    }
    else if (Number.isNaN(height)) {
        return res.status(400).json({ Error: 'please pass a vaild height' });
        // Handle unvaild width value
    }
    else if (Number.isNaN(height)) {
        return res.status(400).json({ Error: 'please pass a vaild width' });
    }
    //cashing an image to improve its performance
    const imageCashing = `.//Cashe//${imageName + height + width}` + '.jpg';
    if (fs_1.default.existsSync(imageCashing)) {
        res.status(200).sendFile(imageCashing, { root: '.' });
    }
    else {
        imageResize(imageName, height, width);
        setTimeout(() => {
            res.status(200).sendFile(imageCashing, { root: '.' });
        }, 200);
    }
});
//image resize function using sharp
function imageResize(imageName, height, width) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)(`.\\images\\${imageName}`)
                .resize({
                width: parseInt(width),
                height: parseInt(height),
            })
                .toFile(`.\\Cashe\\${imageName + height + width}` + '.jpg');
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.imageResize = imageResize;
exports.default = routes;
