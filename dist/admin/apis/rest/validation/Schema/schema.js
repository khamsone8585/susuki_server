"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.productsSchema = exports.distributorSchema = exports.blogSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.blogSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    image: joi_1.default.string().required(),
    descriptions: joi_1.default.string().required(),
    categoryId: joi_1.default.string().required()
});
exports.distributorSchema = joi_1.default.object({
    districtId: joi_1.default.string().required(),
    // map: Joi.array().items(
    //     Joi.object({
    //         lat: Joi.number(),
    //         lng: Joi.number()
    //     })
    // ),
    image: joi_1.default.string().required(),
    dealerCompany: joi_1.default.string().required(),
    village: joi_1.default.string().required(),
    telephone: joi_1.default.string().required(),
    facebook: joi_1.default.string().required()
});
exports.productsSchema = joi_1.default.object({
    categoryId: joi_1.default.string().required(),
    colorPic: joi_1.default.array().items(joi_1.default.object({
        imageName: joi_1.default.string().required(),
        colorName: joi_1.default.string().required()
    })),
    name: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    show: joi_1.default.boolean().required(),
    tagId: joi_1.default.string().required(),
    info: joi_1.default.array().items(joi_1.default.object({
        key: joi_1.default.string().required(),
        value: joi_1.default.string().required()
    }))
});
exports.userSchema = joi_1.default.object({
    picture: joi_1.default.string().required(),
    firstName: joi_1.default.string()
        .required()
        .messages({
        'string.base': 'Invalid type, firstName must be a String',
        'string.empty': 'Please enter your firstName',
    }),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
