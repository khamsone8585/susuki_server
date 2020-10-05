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
const Distributors_1 = __importDefault(require("@/model/Distributors"));
require('../../../../model/Di');
const distributorController = {
    addDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { districtId, map, image, dealerCompany, village, telephone, facebook } = req.body;
        try {
            const distributors = new Distributors_1.default({
                districtId,
                map,
                image,
                dealerCompany,
                village,
                telephone,
                facebook
            });
            yield distributors.save();
            res.status(200).json({ distributors });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const d = await District.findOne().populate('ProvinceId')
            // console.log(d)
            const getDistributors = yield Distributors_1.default.find()
                .populate({
                path: 'districtId',
                populate: 'provinceId'
            });
            // .populate({
            //     path: 'DistrictId'
            // })
            // console.log(getDistributors)
            res.status(200).json({ getDistributors });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, districtId, map, image, dealerCompany, village, telephone, facebook } = req.body;
        try {
            const updateDistributors = yield Distributors_1.default.findByIdAndUpdate(id, {
                $set: {
                    districtId,
                    map,
                    image,
                    dealerCompany,
                    village,
                    telephone,
                    facebook
                }
            }, { runValidators: true, new: true }).populate({
                path: 'districtId',
                populate: 'provinceId'
            });
            res.status(220).json({ updateDistributors });
        }
        catch (err) {
            throw new Error(err);
        }
    }),
    deleteDistributor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield Distributors_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Complete');
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = distributorController;
