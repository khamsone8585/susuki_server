"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formidable_1 = require("formidable");
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const uploadImage = (req, res) => {
    const form = new formidable_1.IncomingForm();
    form.on('progress', (_bytesReceived, _bytesExpected) => { });
    form.on('field', (_name, _file) => { });
    form.on('fileBegin', (_name, file) => {
        if (!fs_1.default.existsSync('./public/img'))
            fs_1.default.mkdirSync('./public/img');
        const fileType = '.' + file.name.split('.').pop();
        const fileName = uuid_1.v4() + fileType;
        file.path = './public/img/' + fileName;
        file.name = fileName;
    });
    form.on('file', (_name, file) => {
        if (file.size === 0)
            return res.status(413).json({ message: 'Your file size is zero byte' });
        return res.status(201).json({ fileName: file.name });
    });
    form.on('aborted', () => {
        return res.status(400).json({ message: 'Request aborted by the user' });
    });
    form.on('error', (err) => {
        return res.status(400).json({ err });
    });
    form.on('end', () => {
        return res.status(201).end();
    });
    form.parse(req);
};
exports.default = uploadImage;
