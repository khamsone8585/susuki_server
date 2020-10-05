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
const dataSets_1 = __importDefault(require("@/model/dataSets"));
const dataSetupController = {
    addDatasets: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { logo, companyName, detail, callCenter, workingDay, workingTimes, address, DistrictId, moreInformation } = req.body;
        try {
            const addDatasets = new dataSets_1.default({
                logo,
                companyName,
                detail,
                callCenter,
                workingDay,
                workingTimes,
                address,
                DistrictId,
                moreInformation
            });
            yield addDatasets.save();
            res.status(200).json({ addDatasets });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    getDatasets: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getDataset = yield dataSets_1.default.find();
            res.status(200).json({ getDataset });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    updateDatasets: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, logo, companyName, detail, callCenter, workingDay, workingTimes, address, DistrictId, moreInformation } = req.body;
        try {
            const updateDataset = yield dataSets_1.default.findByIdAndUpdate(id, {
                $set: {
                    logo,
                    companyName,
                    detail,
                    callCenter,
                    workingDay,
                    workingTimes,
                    address,
                    DistrictId,
                    moreInformation
                }
            }, { runValidators: true, new: true }).populate(['$districts._id']);
            res.status(220).json({ updateDataset });
        }
        catch (e) {
            throw new Error(e);
        }
    }),
    deleteDatasets: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield dataSets_1.default.findByIdAndDelete(id);
            res.status(200).json('Delete Successful');
        }
        catch (e) {
            throw new Error(e);
        }
    })
};
exports.default = dataSetupController;
